import { useState } from 'react';
import { BoxComponent, BaseInputLabel, TypographyComponent } from '../../UILib';
import { style } from './imageInput.style';
import ButtonComponent from '../Button';
import { Dimensions } from '../../../types/Website';
import { getImageHeight, getImageWidth } from '../../../utils/functions';

interface UploadButtonProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>; // Define your function type here
  multiple?: boolean;
  label: string;
  key: string;
  dimensions?: Dimensions;
  size: number;
  image: boolean;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  key,
  dimensions,
  image = true,
  size,
  multiple = false,
  handleChange,
  label,
}) => {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploded] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      //only for Image input
      if (image && dimensions) {
        const imageWidth: number = await getImageWidth(file);
        const imageHeight: number = await getImageHeight(file);
        if (imageWidth < dimensions.width || imageHeight < dimensions.height) {
          setError(`Dimensions should be ${dimensions?.width}x${dimensions?.height}`);
          return false;
        }
      }

      const maxSizeInBytes = 1024 * 1024 * size;
      if (file.size > maxSizeInBytes) {
        setError(`${image ? 'Image' : 'File'} size should be less than ${size} MB`);
        return false;
      }

      return true;
    }
  };

  return (
    <BoxComponent sx={style.mainBox}>
      <BaseInputLabel sx={style.label}>{label}</BaseInputLabel>
      <label htmlFor={key}>
        <ButtonComponent variant="contained" text={uploading ? 'Uploading' : uploaded ? 'Uploaded' : 'Upload'} />
        <input
          accept="*"
          id={key}
          multiple={multiple}
          type="file"
          hidden
          onChange={async (e) => {
            const result = await handleFile(e);
            if (result) {
              setUploading(true);
              setUploded(false);
              await handleChange(e);
              setUploading(false);
              setUploded(true);
            }
          }}
        />
      </label>
      <TypographyComponent sx={{ marginTop: '2px', color: 'red' }}>{error}</TypographyComponent>
    </BoxComponent>
  );
};

export default UploadButton;
