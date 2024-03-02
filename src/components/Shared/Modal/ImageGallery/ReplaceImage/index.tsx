import { BoxComponent } from '../../../../UILib';
import React from 'react';
import { style } from './replaceImage.style';
import ButtonComponent from '../../../Button';
import { FileUploadOutline } from '../../../../../assets/Icons';
interface ReplaceProps {
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleReUpload?: () => void;
  subTitle: string;
}

export default function ReplaceImage({ open, setOpen, handleReUpload, subTitle }: ReplaceProps) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BoxComponent sx={style.mainBox}>
      <BoxComponent sx={style.containeStyle}>
        <BoxComponent>
          <FileUploadOutline sx={{ fontSize: '65px' }} />
        </BoxComponent>
        <BoxComponent sx={style.mainTitle}>Replace Image</BoxComponent>
        <BoxComponent sx={style.subtitletext}>{subTitle}</BoxComponent>
      </BoxComponent>
      <BoxComponent sx={style.buttonContainer}>
        <ButtonComponent text="Cancel" variant="outlined" onClick={handleClose} />
        <ButtonComponent text="Reupload" variant="contained" onClick={handleReUpload} />
      </BoxComponent>
    </BoxComponent>
  );
}
