import React from 'react';

import { BoxComponent } from '../../../UILib';

import deleteImage from '../../../../assets/Images/Iconography_black.png';
import ButtonComponent from '../../Button';
import { style } from './delete.style';
interface DeleteProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
  subTitle: string;
}

export default function Delete({ open, setOpen, handleDelete, subTitle }: DeleteProps) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BoxComponent sx={style.mainBox}>
      <BoxComponent sx={style.containeStyle}>
        <BoxComponent sx={{ width: 80, height: 80 }}>
          <img src={deleteImage} alt="Your Alt Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </BoxComponent>
        <BoxComponent sx={style.mainTitle}>Delete Menu</BoxComponent>

        <BoxComponent sx={style.subtitletext}>{subTitle}</BoxComponent>
      </BoxComponent>
      <BoxComponent sx={style.buttonContainer}>
        <ButtonComponent text="Cancel" variant="outlined" onClick={handleClose} />
        <ButtonComponent text="Delete" variant="contained" onClick={handleDelete} />
      </BoxComponent>
    </BoxComponent>
  );
}
