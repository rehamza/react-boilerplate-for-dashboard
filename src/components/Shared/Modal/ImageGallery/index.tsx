import { Close, FileUploadOutline } from '../../../../assets/Icons';
import { BoxComponent, TypographyComponent, BaseIconButton, GridComponent } from '../../../UILib';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import ButtonComponent from '../../Button';

import SearchBar from '../../SearchBar';
import ImageCard from './ImageCard/ImageCard';
import { style } from './imageGallery.style';
import ErrorCard from './ErrorCard';
import UploadingCard from './UploadingCard';
import { Image } from '../../../../types/MenuManager/menu';
import { endpoints } from '../../../../configs/endpoints';
import { environment } from '../../../../configs/environments/environment';
// import { useCreateMutation } from 'apps/portal/dashboard/src/hooks/API/useCreateMutation';
// import { endpoints } from 'apps/portal/dashboard/src/configs/endpoints';

interface ImageGalleryprops {
  insertImage: (url: string) => void;
  handleCloseModal: () => void;
  setOpenGallery: React.Dispatch<boolean>;
}

export default function ImageGallery({ insertImage, handleCloseModal, setOpenGallery }: ImageGalleryprops) {
  const [images, setImages] = useState<Image[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [fileData, setFileData] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    if (value === '') {
      getImages();
    } else {
      const filteredArray = images.filter((item) => item.name?.toLowerCase().includes(value.toLowerCase()));
      setImages(filteredArray);
    }
  };
  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setProgress(0);
      const fileUrl = URL.createObjectURL(file);
      setFileData(fileUrl);
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 500);

      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        const formData = new FormData();
        formData.append('file', file);
        formData.append(
          'fileData',
          JSON.stringify({
            id: images.length + 1,
            name: file.name,
            size: file.size,
            type: file.type,
            fileFor: 'pos',
            restaurantId: 1,
            businessId: 1,
            status: 'active',
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        );
        // console.log("helkllkkjasndkjasndjkasndjk",formData)
        // const imageData=  uploadImage(formData)
        // console.log(imageData)
        try {
          const response = await fetch(environment.API_URL + endpoints.file.uploadFile, {
            headers: {
              'x-tenant-id': '1',
            },
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            const data = await response.json();
            const newImage: Image = {
              id: data.data.id,
              fileUrl: data.data.fileUrl,
              name: data.data.name,
              size: data.data.size,
              type: data.data.type,
              fileFor: data.data.fileFor,
            };
            setImages([newImage, ...images]);
            setIsUploading(false);
            setProgress(100);
            setFileData(null);
          } else {
            console.error('Error uploading file:', response.statusText);
            setIsUploading(false);
            setProgress(0);
            setFileData(null);
            setError(true);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          setIsUploading(false);
          setProgress(0);
          setFileData(null);
          setError(true);
        } finally {
          clearInterval(timer);
        }
      } else {
        console.error('Unsupported file type. Please select a JPG or PNG image.');
        setIsUploading(false);
        setProgress(0);
      }
    }
  };
  const insertSelected = () => {
    if (selectedImage && selectedImage.fileUrl) {
      // const filterObject = images.filter((item) => item.id === selectedImage.id);
      // if (filterObject[0]) {
      //   insertImage(filterObject[0]);
      // }
      insertImage(selectedImage.fileUrl);
      setOpenGallery(false);
    } else {
      console.log('Select the Image:');
    }
  };
  const getImages = async () => {
    try {
      const response = await fetch(environment.API_URL + endpoints.file.getImageFiles, {
        headers: {
          'x-tenant-id': '1',
        },
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setImages(data.data);
      } else {
        console.error('Error uploading file:', response.statusText);
        setImages([]);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setIsUploading(false);
      setProgress(10);
      setImages([]);
    }
  };

  const handleSelectImage = (data: Image) => {
    setSelectedImage(data);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <BoxComponent sx={style.mainBox}>
      <BoxComponent sx={style.heading}>
        <TypographyComponent variant="body1" sx={style.title}>
          Image Library
        </TypographyComponent>
        <BaseIconButton onClick={handleCloseModal}>
          <Close />
        </BaseIconButton>
      </BoxComponent>
      <BoxComponent sx={{ ml: 2 }}>
        <BoxComponent sx={style.searchBarAndButton}>
          <BoxComponent>
            <SearchBar sx={style.searchBox} search={search} handleSearch={handleSearch} />
          </BoxComponent>
          <BoxComponent
            sx={{
              display: 'flex',
              gap: 2,
              marginRight: { md: 3, xs: 0 },
            }}
          >
            <ButtonComponent
              icon={<FileUploadOutline sx={{ fontSize: '32px', color: '#008279' }} />}
              text="Upload New"
              variant="outlined"
              sx={style.fileButton}
              onClick={handleUploadButtonClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
              accept="image/jpeg, image/png"
            />
            <ButtonComponent text="Insert Selected" variant="contained" onClick={() => insertSelected()} />
          </BoxComponent>
        </BoxComponent>
        <BoxComponent sx={{ height: '50vh', overflow: 'auto' }}>
          {' '}
          {/* Adjust height as needed */}
          <GridComponent container spacing={3} sx={{ mt: 3 }}>
            {isUploading && (
              <GridComponent item>
                <UploadingCard progress={progress} fileData={fileData} />
              </GridComponent>
            )}
            {error && (
              <GridComponent item>
                <ErrorCard />
              </GridComponent>
            )}
            {images.length > 0 &&
              images.map((data, index) => (
                <GridComponent item key={index}>
                  <ImageCard
                    isUploading={isUploading}
                    progress={progress}
                    handleClick={handleSelectImage}
                    selectedImage={selectedImage}
                    image={data}
                  />
                </GridComponent>
              ))}
          </GridComponent>
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
