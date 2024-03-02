import { BaseIconButton, BoxComponent, TypographyComponent } from '../../../UILib';
import { Edit } from '../../../../assets/Icons';
import { style } from './imageSelectionCard.style';
import { useState } from 'react';
import PopUp from '../../Popup/Index';
interface Actions {
  name: any;
  action: (index: number) => void;
}

interface ImageSelectionCardProps {
  image: string | undefined;
  handleEditImage: (index: number) => void;
  handleReplaceImage: (index: number) => void;
  handleDeleteImage: (index: number) => void;
  index?: number;
  title: string;
}

export default function ImageSelectionCard({
  image,
  handleEditImage,
  handleReplaceImage,
  handleDeleteImage,
  index,
  title,
}: ImageSelectionCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const actions: Actions[] = [
    { name: 'Edit', action: (index) => handleEditImage(index) },
    { name: 'Delete', action: (index) => handleDeleteImage(index) },
    { name: 'Replace', action: (index) => handleReplaceImage(index) },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, index: number | undefined) => {
    setAnchorEl(event.currentTarget);
    if (index) setSelectedIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };
  return (
    <BoxComponent sx={style.mainContainer}>
      <BoxComponent sx={style.imageContainer}>
        <img src={image} alt={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <BoxComponent sx={style.overlayContainer}>
          <BoxComponent sx={style.editIconContainer}>
            <BaseIconButton onClick={(e) => handleMenuOpen(e, 1)}>
              <Edit />
            </BaseIconButton>
            <PopUp
              anchorEl={anchorEl}
              selectedIndex={selectedIndex}
              handleMenuClose={handleMenuClose}
              actions={actions}
              index={index}
              data={index}
            />
          </BoxComponent>
        </BoxComponent>
      </BoxComponent>

      <TypographyComponent sx={style.typography}> {title}</TypographyComponent>
    </BoxComponent>
  );
}
