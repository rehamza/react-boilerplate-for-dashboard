import { BoxComponent, TypographyComponent } from '../../../../UILib';
import { style } from './imageCard.style';
import { convertIntoMB, truncateTitle } from '../../../../../utils/functions';
import { Image } from '../../../../../types/MenuManager/menu';

interface ImageCardProps {
  image: Image;
  isUploading: boolean;
  progress: number;
  handleClick: (data: Image) => void;
  selectedImage: Image | null;
}

export default function ImageCard({ image, handleClick, selectedImage }: ImageCardProps) {
  return (
    <BoxComponent sx={style.mainBox} onClick={() => handleClick(image)}>
      <BoxComponent sx={style.imageContainer}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={image.fileUrl} alt={image.name} />
      </BoxComponent>

      {selectedImage?.id === image.id && <BoxComponent sx={style.overlay} />}

      <BoxComponent sx={style.typographyBox}>
        <TypographyComponent
          color={selectedImage?.id === image.id ? 'primary.main' : 'grey.500'}
          fontSize={14}
          fontWeight={600}
        >
          {image?.name && truncateTitle(image.name, 10)}
        </TypographyComponent>
        <TypographyComponent
          color={selectedImage?.id === image.id ? 'primary.main' : 'grey.500'}
          fontSize={14}
          fontWeight={600}
        >
          {image?.size && convertIntoMB(image.size)}
        </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
