import { BoxComponent, TypographyComponent, BaseIconButton } from '../../../UILib';
import { Edit } from '../../../../assets/Icons';
import { IScheduling, IVisibility } from '../../../../types/MenuManager/menu';
import { style } from './customizedChannelSettings.style';
import { convertTo12HourFormat } from '../../../../helpers';
interface CustomisedChannelSettingsProps {
  data: IVisibility[];
  handleEdit: (data: IVisibility[]) => void;
}

export default function CustomisedChannelSettings({ data, handleEdit }: CustomisedChannelSettingsProps) {
  return (
    <BoxComponent sx={style.container}>
      <BoxComponent sx={style.header}>
        <TypographyComponent sx={style.title}>Customised Channels</TypographyComponent>
        <BaseIconButton onClick={() => handleEdit(data)}>
          <Edit />
        </BaseIconButton>
      </BoxComponent>
      {data?.length > 0 &&
        data.map((row: IVisibility, index: number) => (
          <>
            {row.isVisible ? (
              <>
                <BoxComponent sx={style.channelContainer} key={index}>
                  <TypographyComponent sx={style.channelTitle}>{row.device}</TypographyComponent>
                </BoxComponent>
                {row.isDefault == false ? (
                  row.scheduling.map((rowData: IScheduling, rowIndex: number) => (
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
          </>
        ))}
    </BoxComponent>
  );
}
