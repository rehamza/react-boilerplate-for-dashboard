import { Box, Button } from '@mui/material';
import { RotateLeft, RotateRight } from '@mui/icons-material';
import { useCallback, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { styled } from '@mui/material/styles';
import { BaseIconButton, BoxComponent, TypographyComponent } from '../../../../UILib';
import ButtonComponent from '../../../Button';
import { CropSharp } from '../../../../../assets/Icons';
import { fileNameUrl } from '../../../../../helpers';
import { endpoints } from '../../../../../configs/endpoints';

import { environment } from '../../../../../configs/environments/environment';

interface CropState {
  crop: any | null;
  completedCrop: any | null;
}
const initialCropState = {
  crop: {
    x: 25,
    y: 25,
    width: 75,
    height: 75,
    unit: '%',
    aspect: 1,
  },
  completedCrop: null,
};
const StyledReactCrop = styled(ReactCrop)({
  '& .ReactCrop__child-wrapper': {
    height: '65vh',
  },
});

interface EditImageProps {
  data: string | undefined;
  onClose: () => void;
  handleSelectedEditImage: (url: string) => void;
}

export default function EditImage({ data, onClose, handleSelectedEditImage }: EditImageProps) {
  const [edit, setEdit] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  const [cropHistory, setCropHistory] = useState<CropState[]>([initialCropState]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  const [state, setState] = useState<CropState>(initialCropState);

  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { height, width } = e.currentTarget;

    setState((prevState) => ({
      ...prevState,
      crop: {
        ...prevState.crop,
        aspect: 1,
      },
      completedCrop: {
        x: 0,
        y: 0,
        height,
        width,
        unit: 'px',
      },
    }));
  }, []);

  const makeClientCrop = useCallback(async (crop: any) => {
    if (imgRef.current && crop.width && crop.height) {
      const image = imgRef.current;
      const canvas = document.createElement('canvas');
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('Canvas context is not available');
      }

      // Get the second part and split it by the date part
      let fileName = '';
      if (data) {
        fileName = fileNameUrl(data);
      }

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      return new Promise<string | null>((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('Canvas is empty'));
            return;
          }
          const file = new File([blob], `${fileName}-cropped-image.jpg`, { type: 'image/jpeg' });
          const fileData = {} as any;

          fileData.name = file.name;
          fileData.size = file.size;
          fileData.fileFor = 'pos';
          fileData.fileUrl = '';
          fileData.type = file.type;
          fileData.restaurantId = 1;
          fileData.businessId = 1;
          fileData.status = 'active';
          fileData.createdAt = new Date();
          fileData.updatedAt = new Date();

          const formData = new FormData();
          formData.append('file', file);
          formData.append('fileData', JSON.stringify(fileData));

          // Send the file to your server
          fetch(environment.API_URL + endpoints.file.uploadFile, {
            headers: {
              'x-tenant-id': '1',
            },
            method: 'POST',
            body: formData,
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              console.log('Upload successful:', data);
              resolve(data.data);
            })
            .catch((error) => {
              console.error('Upload failed:', error);
              reject(error);
            });
        }, 'image/jpeg');
      });
    }

    return null;
  }, []);

  const handleCrop = useCallback(async () => {
    const croppedImageData: any = await makeClientCrop(state.completedCrop);

    handleSelectedEditImage(croppedImageData?.fileUrl);
    onClose();
  }, [state.completedCrop]);

  const handleEdit = () => {
    setEdit(true);
  };
  const undo = () => {
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex((prevIndex) => prevIndex - 1);
      setState(cropHistory[currentHistoryIndex - 1]);
    }
  };

  const redo = () => {
    if (currentHistoryIndex < cropHistory.length - 1) {
      setCurrentHistoryIndex((prevIndex) => prevIndex + 1);
      setState(cropHistory[currentHistoryIndex + 1]);
    }
  };

  const resetCrop = () => {
    setState(initialCropState);
    setCropHistory([initialCropState]);
    setCurrentHistoryIndex(0);
  };
  return (
    <BoxComponent
      sx={{
        width: '100%',
        height: '100vh',
        background: 'white',
        border: '1.30px #E9E9F4 solid',
        overflow: 'auto',
      }}
    >
      <BoxComponent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: { lg: '75px 112px 5px 112px', md: '55px 112px 0px 112px' },
          flexDirection: { md: 'row', xs: 'column' },
        }}
      >
        <BoxComponent sx={{ display: 'inline-flex' }}>
          <Button variant="text" sx={{ color: '#5B5D5E', fontSize: 18, fontWeight: 500 }} onClick={resetCrop}>
            Reset
          </Button>
          <Box sx={{ display: 'inline-flex', gap: 1 }}>
            <BaseIconButton onClick={undo}>
              <RotateLeft />
            </BaseIconButton>
            <BaseIconButton onClick={redo}>
              <RotateRight />
            </BaseIconButton>
          </Box>
        </BoxComponent>
        <BoxComponent>
          <BaseIconButton onClick={() => handleEdit()}>
            <CropSharp />
          </BaseIconButton>
          <TypographyComponent
            variant="body1"
            sx={{ color: 'black', fontSize: 12, fontWeight: 500, textAlign: 'center' }}
          >
            1:1
          </TypographyComponent>
        </BoxComponent>
        <BoxComponent sx={{ display: 'flex', gap: 2 }}>
          <ButtonComponent variant="outlined" text="Discard" onClick={() => onClose()} />
          <ButtonComponent variant="contained" text="Save" onClick={handleCrop} />
        </BoxComponent>
      </BoxComponent>

      {edit ? (
        <BoxComponent
          className="testing"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 112px',
            width: 'auto',
          }}
        >
          <StyledReactCrop
            crop={state.crop}
            keepSelection
            onChange={(c) => {
              setState((prevState) => ({ ...prevState, crop: c }));
              setCropHistory((prevHistory) => [
                ...prevHistory.slice(0, currentHistoryIndex + 1),
                { crop: c, completedCrop: null },
              ]);
              setCurrentHistoryIndex((prevIndex) => prevIndex + 1);
            }}
            onComplete={(c) => {
              setState((prevState) => ({ ...prevState, completedCrop: c }));
              setCropHistory((prevHistory) => [
                ...prevHistory.slice(0, currentHistoryIndex + 1),
                { crop: c, completedCrop: c },
              ]);
              setCurrentHistoryIndex((prevIndex) => prevIndex + 1);
            }}
            aspect={1}
            className="custom-react-crop"
          >
            <img
              ref={imgRef}
              crossOrigin="anonymous"
              alt="Error"
              src={data}
              style={{ height: '100%' }}
              onLoad={onImageLoad}
            />
          </StyledReactCrop>
        </BoxComponent>
      ) : (
        <BoxComponent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 112px',
            width: 'auto',
            height: { lg: '600px', md: '300px' }, // Adjust height for responsiveness
          }}
        >
          <img src={data} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </BoxComponent>
      )}
    </BoxComponent>
  );
}
