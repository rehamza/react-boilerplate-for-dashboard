import { Close } from '../../../../assets/Icons';
import ButtonComponent from '../../Button';
import { BoxComponent, TypographyComponent, BaseIconButton } from '../../../UILib';
import warningImage from '../../../../assets/Images/warning.png';
import { style } from './customizationAlert.style';

interface CustomizationAlertProps {
  handleContinue: () => void;
  handleCloseModal: () => void;
}
export default function CustomizationAlert({ handleContinue, handleCloseModal }: CustomizationAlertProps) {
  return (
    <BoxComponent sx={style.containerStyles}>
      <BoxComponent sx={style.closeButtonStyles}>
        <BaseIconButton>
          <Close />
        </BaseIconButton>
      </BoxComponent>
      <BoxComponent sx={style.innerContainerStyles}>
        <BoxComponent sx={style.imageContainerStyles}>
          <BoxComponent sx={style.imageStyles}>
            <img src={warningImage} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </BoxComponent>
        </BoxComponent>

        <TypographyComponent sx={style.titleStyles}>Customization Alert</TypographyComponent>
        <TypographyComponent sx={style.messageStyles}>
          Enabling Off Prem and On Prem will override customization of individual channels.
        </TypographyComponent>
      </BoxComponent>

      <BoxComponent sx={style.buttonContainerStyles}>
        <ButtonComponent text="Cancel" variant="outlined" onClick={() => handleCloseModal} />
        <ButtonComponent text="Continue" variant="contained" onClick={() => handleContinue()} />
      </BoxComponent>
    </BoxComponent>
  );
}
