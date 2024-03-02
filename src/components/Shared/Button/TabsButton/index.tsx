import { BoxComponent } from '../../../UILib';
import ButtonComponent from '..';

interface TabsProps {
  state: any;
  handleChangeDevice: any;
  selectedTab: any;
}
export default function TabsButtonComponet({ state, handleChangeDevice, selectedTab }: TabsProps) {
  return (
    <BoxComponent
      sx={{
        width: '100%',
        bgcolor: '#ECECF5',
        display: 'flex',
        borderRadius: '9.273px',
      }}
    >
      {state.map((row: any, index: any) => (
        <ButtonComponent
          text={row.device}
          variant="text"
          sx={{
            width: '100%',
            height: '100%',
            padding: { md: '10px 44px 10px 44px' },
            color: 'black',
            textTransform: 'none',
            fontSize: 22,
            bgcolor: selectedTab === row.device ? '#FFFFFF' : '#ECECF5',
            border: selectedTab === row.device ? 'none' : '',
          }}
          onClick={() => handleChangeDevice(row.device, index)}
        />
      ))}
    </BoxComponent>
  );
}
