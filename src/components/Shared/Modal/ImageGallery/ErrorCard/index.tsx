import { BoxComponent, TypographyComponent } from '../../../../UILib';
import { style } from './errorCard.style';
import erroImage from '../../../../../assets/Images/error-image.png';
export default function ErrorCard() {
  return (
    <BoxComponent sx={style.mainBox}>
      <BoxComponent sx={style.imageContainer}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={erroImage} />
      </BoxComponent>

      <BoxComponent sx={style.typographyBox}>
        <TypographyComponent color="red" fontSize={14} fontWeight={600}>
          Upload Failed
        </TypographyComponent>
        <TypographyComponent color="grey.500" fontSize={14} fontWeight={600}>
          4MB
        </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
