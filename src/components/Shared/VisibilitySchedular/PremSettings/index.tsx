import { BoxComponent, TypographyComponent } from '../../../UILib';

import { IScheduling, IVisibility } from '../../../../types/MenuManager/menu';
import { style } from '../CustomisedChannelSettings/customizedChannelSettings.style';
import { convertTo12HourFormat } from '../../../../helpers';
interface PremisesSettingsProps {
  data: IVisibility;
}

export default function PremisesSetting({ data }: PremisesSettingsProps) {
  return (
    <BoxComponent
      sx={{
        display: 'flex',
        paddingY: 1,
        paddingX: 2,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column',
        mb: 2,
      }}
    >
      {data.isVisible ? (
        <>
          {data.isDefault == false ? (
            data.scheduling.map((rowData: IScheduling, rowIndex: number) => (
              <>
                <BoxComponent key={rowIndex} sx={style.channelBox}>
                  <TypographyComponent sx={style.channelTitle}>{rowData.day}</TypographyComponent>
                  <TypographyComponent sx={style.channelDetails}>
                    {rowData.allDay
                      ? 'All Day'
                      : convertTo12HourFormat(rowData.startTime) +
                        ' ' +
                        '-' +
                        ' ' +
                        convertTo12HourFormat(rowData.endTime)}
                  </TypographyComponent>
                </BoxComponent>
              </>
            ))
          ) : (
            <BoxComponent sx={style.channelBox}>
              <TypographyComponent sx={style.channelTitle}>Monday-Sunday</TypographyComponent>
              <TypographyComponent sx={style.channelDetails}>hours of operations</TypographyComponent>
            </BoxComponent>
          )}
        </>
      ) : (
        ''
      )}
    </BoxComponent>
  );
}
