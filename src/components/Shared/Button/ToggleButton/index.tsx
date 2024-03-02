import { BoxComponent } from '../../../UILib';
import ButtonComponent from '../index';
import { style } from './toggleButton.style';
interface ToggleButtonProps {
  selectedOption: boolean;
  handleToggleChange?: any;
  buttonName1?: string;
  buttonName2?: string;
}
export default function ToggleButtonComponent({
  buttonName1,
  buttonName2,
  selectedOption,
  handleToggleChange,
}: ToggleButtonProps) {
  return (
    <BoxComponent
      sx={{
        ...style.toggleBox,
        // or specify a height if you want
      }}
    >
      <ButtonComponent
        text={buttonName1 ? buttonName1 : 'Default'}
        variant="text"
        sx={{
          width: '100%',
          height: '45px',
          padding: { md: '15.281px 36px', xs: '11px' },
          color: 'black',
          textTransform: 'none',
          fontWeight: 400,
          fontSize: 21.27,
          bgcolor: selectedOption === true ? '#FFFFFF' : '#ECECF5',
          border: selectedOption === true ? 'none' : '',
          borderRadius: selectedOption === true ? 'none' : '9.273px',
        }}
        onClick={handleToggleChange}
      />

      <ButtonComponent
        text={buttonName2 ? buttonName2 : 'Custom'}
        variant="text"
        sx={{
          width: '100%',
          height: '45px',
          padding: { md: '15.281px 36px', xs: '11px' },
          fontWeight: 400,
          color: 'black',
          textTransform: 'none',
          fontSize: 21.27,
          bgcolor: selectedOption === false ? '#FFFFFF' : '#ECECF5',
          border: selectedOption === false ? 'none' : '',
          borderRadius: selectedOption === false ? 'none' : '9.273px',
        }}
        onClick={handleToggleChange}
      />
    </BoxComponent>
  );
}
