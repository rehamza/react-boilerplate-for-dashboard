'use client';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
interface CalendarProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  disableFuture: boolean;
}
export function Calendar({ value, onChange, disableFuture }: CalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        disableFuture={disableFuture ? disableFuture : false}
        onChange={onChange}
        sx={{
          '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
            background: '#008279',
            color: '#fff',
          },
          '&. MuiButtonBase-root.MuiPickersDay-root': {
            fontsize: '16px',
            fontWeight: 400,
            color: '#1D1B20',
          },
          '& .MuiTypography-root.MuiDayCalendar-weekDayLabel': {
            color: '#1D1B20',
            fontsize: '16px !important',
            fontWeight: 400,
          },
        }}
      />
    </LocalizationProvider>
  );
}
