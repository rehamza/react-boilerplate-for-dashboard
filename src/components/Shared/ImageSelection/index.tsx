import { BoxComponent, TypographyComponent, BaseIconButton } from '../../UILib';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { style } from './imageSelection.style';
interface ImageSelectionProps {
  handleGallery: () => void;
}
export default function ImageSelection({ handleGallery }: ImageSelectionProps) {
  return (
    <BoxComponent sx={style.mainBox}>
      <BoxComponent
        position="relative"
        width={82}
        height={82}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <BaseIconButton onClick={() => handleGallery()}>
          <AddPhotoAlternateIcon sx={{ fontSize: 50 }} />
        </BaseIconButton>
      </BoxComponent>
      <TypographyComponent variant="h6" color="#53575D" fontSize={16} fontFamily="Poppins" fontWeight={400}>
        Add Image
      </TypographyComponent>
      <TypographyComponent variant="body1" color="#53575D" fontSize={14} fontFamily="Poppins" fontWeight={400}>
        Upload a jpg, jpeg, or png file up to 5MB
      </TypographyComponent>
    </BoxComponent>
  );
}
