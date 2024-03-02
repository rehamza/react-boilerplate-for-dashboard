import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import dayjs from 'dayjs';
import {
  BoxComponent,
  GridComponent,
  TypographyComponent,
  BaseRadioGroup,
  BaseFormControlLabel,
} from '../../../UILib';
import { IVisibility, IScheduling } from '../../../../types/MenuManager/menu';
import { BaseTimePicker } from '../../../UILib';
import { TextField } from '@mui/material';

interface visibilityProps {
  visibilityData: IVisibility;
  handleChange: (array: IScheduling[]) => void;
}

export default function VisibilityScheduler({ visibilityData, handleChange }: visibilityProps) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [selectedDays, setSelectedDays] = useState<{ [day: string]: boolean }>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );

  const [selectedOption, setSelectedOption] = useState<{ [day: string]: 'allDay' | 'selectHours' }>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: 'allDay' }), {})
  );

  const [timeDetails, setTimeDetails] = useState<{
    [day: string]: { startTime: string; endTime: string };
  }>(daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: { startTime: '', endTime: '' } }), {}));

  const [error, setError] = useState<{ [day: string]: string }>(
    daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: '' }), {})
  );

  const handleDayChange = (day: string) => {
    setSelectedDays((prevSelectedDays) => ({
      ...prevSelectedDays,
      [day]: !prevSelectedDays[day],
    }));

    if (!selectedDays[day]) {
      setSelectedOption((prevOption) => ({
        ...prevOption,
        [day]: 'allDay',
      }));

      setTimeDetails((prevDetails) => ({
        ...prevDetails,
        [day]: {
          startTime: '',
          endTime: '',
        },
      }));
    }
  };

  const handleOptionChange = (day: string, value: 'allDay' | 'selectHours') => {
    setSelectedOption((prevOption) => ({
      ...prevOption,
      [day]: value,
    }));
  };

  const handleTimeChange = (day: string, type: 'startTime' | 'endTime', time: any) => {
    const hours = time.$d.getHours();
    const minutes = time.$d.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    setTimeDetails((prevDetails) => ({
      ...prevDetails,
      [day]: {
        ...prevDetails[day],
        [type]: formattedTime,
      },
    }));
    // Validate time range
    let errorMessage = '';
    if (type === 'endTime' && time !== '' && time < timeDetails[day].startTime) {
      errorMessage = 'End time must be greater than  start time';
    } else if (type === 'startTime' && time !== '' && time > timeDetails[day].endTime) {
      errorMessage = 'Start time must be less than  end time';
    }

    setError((prevError) => ({
      ...prevError,
      [day]: errorMessage,
    }));
  };

  useEffect(() => {
    getDataForDay();
  }, [selectedDays, selectedOption, timeDetails]);

  useEffect(() => {
    if (visibilityData?.scheduling?.length > 0) {
      handleEditData(visibilityData.scheduling as []);
    }
  }, []);

  const getDataForDay = () => {
    const array = [] as IScheduling[];
    daysOfWeek.forEach((day) => {
      if (selectedDays[day]) {
        let startTime = '';
        let endTime = '';

        if (selectedOption[day] === 'allDay') {
          startTime = '';
          endTime = '';
        } else {
          startTime = timeDetails[day].startTime;
          endTime = timeDetails[day].endTime;
        }
        const schedule = {
          id: null,
          day,
          allDay: selectedOption[day] === 'allDay' ? true : false,
          startTime,
          endTime,
        };

        array.push(schedule);
      }
    });

    handleChange(array);
  };

  const handleEditData = (editData: []) => {
    editData.forEach((item) => {
      const { day, allDay, startTime, endTime } = item;

      setSelectedDays((prevSelectedDays) => ({
        ...prevSelectedDays,
        [day]: true,
      }));

      setSelectedOption((prevOption) => ({
        ...prevOption,
        [day]: allDay ? 'allDay' : 'selectHours',
      }));

      setTimeDetails((prevDetails) => ({
        ...prevDetails,
        [day]: {
          startTime: startTime,
          endTime: endTime,
        },
      }));
    });
  };

  return (
    <BoxComponent sx={{ width: '100%' }}>
      {daysOfWeek.map((day) => (
        <GridComponent container spacing={2} key={day}>
          <GridComponent item md={12}>
            <BoxComponent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <BaseFormControlLabel
                control={<Checkbox checked={selectedDays[day]} onChange={() => handleDayChange(day)} color="primary" />}
                label={day}
              />

              <BaseRadioGroup
                row
                aria-label={`${day} timeOption`}
                name={`${day} timeOption`}
                value={selectedOption[day]}
                onChange={(e) => handleOptionChange(day, e.target.value as 'allDay' | 'selectHours')}
                sx={{ display: 'flex', gap: '30px' }}
              >
                <BaseFormControlLabel
                  value="allDay"
                  control={<Radio color="primary" disabled={!selectedDays[day]} />}
                  label="All Day"
                />
                <BaseFormControlLabel
                  value="selectHours"
                  control={<Radio color="primary" disabled={!selectedDays[day]} />}
                  label="Select Hours"
                />
              </BaseRadioGroup>
            </BoxComponent>
          </GridComponent>
          <GridComponent item md={12}>
            {selectedOption[day] === 'selectHours' && selectedDays[day] && (
              <BoxComponent sx={{ display: 'flex', gap: 1, flexDirection: 'row', justifyContent: 'flex-end', mb: 1 }}>
                <BoxComponent sx={{ display: 'flex', flexDirection: 'column' }}>
                  <BaseTimePicker
                    value={dayjs(timeDetails[day].startTime, 'HH:mm')}
                    onChange={(newTime: any) => handleTimeChange(day, 'startTime', newTime)}
                    sx={{ width: '120px', fontSize: '18px', ml: 4 }}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                  <BoxComponent sx={{ width: '150px', pl: 4 }}>
                    <TypographyComponent sx={{ color: 'red' }}>
                      {error[day] && error[day].includes('Start') ? error[day] : null}
                    </TypographyComponent>
                  </BoxComponent>
                </BoxComponent>
                <BoxComponent sx={{ display: 'flex', flexDirection: 'column' }}>
                  <BaseTimePicker
                    value={dayjs(timeDetails[day].endTime, 'HH:mm')}
                    onChange={(newTime: any) => handleTimeChange(day, 'endTime', newTime)}
                    sx={{ width: '120px', fontSize: '18px', ml: 4 }}
                    renderInput={(params: any) => <TextField {...params} />}
                  />
                  <BoxComponent sx={{ width: '150px', pl: 4 }}>
                    <TypographyComponent sx={{ color: 'red' }}>
                      {error[day] && error[day].includes('End') ? error[day] : null}
                    </TypographyComponent>
                  </BoxComponent>
                </BoxComponent>
              </BoxComponent>
            )}
          </GridComponent>
        </GridComponent>
      ))}
    </BoxComponent>
  );
}
