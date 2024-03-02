import { useEffect, useState, useRef } from 'react';
import FormLayout from '../../../Layout/FormLayout';
import { style } from '../create.style';
import { IRefData } from '../../../../types/ReactTypes';
import { steperLabel, steperHeight, marks, cancelPath } from '../../../../constants/FormStepper/menu';
import {
  BaseInputLabel,
  BasePaper,
  BoxComponent,
  DialogComponent,
  GridComponent,
  TypographyComponent,
} from '../../../UILib';
import FormFields from '../../../Shared/FormFields';
import MultiSelect from '../../../Shared/MultiSelect';
import ImageSelectionCard from '../../../Shared/ImageSelection/ImageSelectionCard';
import Premises from '../../../Shared/VisibilitySchedular/Premises';
import { useBreadcrumbs } from '../../../../contexts/Breadcrumbs';
import { useFormik } from 'formik';
import { menuSchema } from '../../../../constants/validation';
import ColorPicker from '../../../Shared/ColorPicker';
import ButtonComponent from '../../../Shared/Button';
import CustomVisibility from '../../../Shared/VisibilitySchedular/CustomVisibility';
import { IVisibility, ChannelVisibilityType, IMenuRequest, IMenu } from '../../../../types/MenuManager/menu';
import CustomisedChannelSettings from '../../../Shared/VisibilitySchedular/CustomisedChannelSettings';
import CustomizationAlert from '../../../Shared/Modal/CustomizationAlert';
import ImageGallery from '../../../Shared/Modal/ImageGallery';
import ImageSelection from '../../../Shared/ImageSelection';
import EditImage from '../../../Shared/Modal/ImageGallery/EditImage';
import ReplaceImage from '../../../Shared/Modal/ImageGallery/ReplaceImage';
import Delete from '../../../Shared/Modal/Delete';
import { devicesName } from '../../../../constants/constant';
interface Option {
  value: number;
  label: string;
}

interface MenuFormProps {
  readonly handleCreateMenu?: (menu: IMenuRequest) => void;
  readonly handleEditMenu?: (menu: IMenuRequest) => void;
  readonly selectedCategoriesData?: any;
  readonly categories?: any;
  readonly onPremData?: IVisibility;
  readonly isEdit?: any;
  readonly offPremData?: IVisibility;
  readonly customVisibilityData?: IVisibility[];
  readonly menu?: IMenu;
  readonly menuId?: number;
}
export default function MenuForm({
  handleEditMenu,
  handleCreateMenu,
  categories,
  selectedCategoriesData,
  onPremData,
  isEdit,
  offPremData,
  menu,
  menuId,
  customVisibilityData,
}: MenuFormProps) {
  // const { categoriesData, isEdit, onPremData, offPremData } = props;
  const { setTitle } = useBreadcrumbs();
  const generalRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const visibilityRef = useRef<HTMLDivElement>(null);
  const [posImage, setPosImage] = useState<string>();
  const [editModal, setEditModal] = useState<boolean>(false);
  const [openReUploadModal, setOpenReUploadModal] = useState(false);
  const [deleteImage, setDeleteImage] = useState(false);
  // const [deviceImages, setDeviceImages] = useState<Image[]>([]);

  const [initialValues, setInitialValues] = useState<IMenu>(
    menu || {
      menuName: '',
      posDisplayName: '',
      posButtonColor: '#fffff',
    }
  );
  /* Initial Values of States */

  //TODO: hamza tariq move initial or constant to constant folder
  const initialOnPremValues: IVisibility = {
    isVisible: false,
    isDefault: true,
    channelVisibilityType: ChannelVisibilityType.OnPrem,
    device: '',
    scheduling: [],
  };
  const initialOffPremises: IVisibility = {
    isVisible: false,
    isDefault: true,
    channelVisibilityType: ChannelVisibilityType.OffPrem,
    device: '',
    scheduling: [],
  };
  const initialCustomSettings: IVisibility[] = [
    {
      isVisible: false,
      isDefault: true,
      channelVisibilityType: ChannelVisibilityType.Custom,
      device: 'Pos',
      scheduling: [],
    },
    {
      isVisible: false,
      isDefault: true,
      channelVisibilityType: ChannelVisibilityType.Custom,
      device: 'Mpos',
      scheduling: [],
    },
    {
      isVisible: false,
      isDefault: true,
      channelVisibilityType: ChannelVisibilityType.Custom,
      device: 'Kiosk',
      scheduling: [],
    },
    {
      isVisible: false,
      isDefault: true,
      channelVisibilityType: ChannelVisibilityType.Custom,
      device: 'QR',
      scheduling: [],
    },
    {
      isVisible: false,
      isDefault: true,
      channelVisibilityType: ChannelVisibilityType.Custom,
      device: 'Online',
      scheduling: [],
    },
    {
      isVisible: false,
      isDefault: true,
      channelVisibilityType: ChannelVisibilityType.Custom,
      device: 'Doordash',
      scheduling: [],
    },
  ];

  useEffect(() => {
    if (menu) {
      setInitialValues(menu);
      // if (menu?.picture) setDeviceImages([{ fileUrl: menu.picture, name: 'POS & mPOS' }]);
    }
  }, [menu]);

  const refData: IRefData[] = [
    { id: 3, ref: generalRef, threshold: 0.1 },
    { id: 2, ref: categoryRef, threshold: 0.1 },
    { id: 1, ref: visibilityRef, threshold: 1 },
  ];

  const [openGallery, setOpenGallery] = useState<boolean>(false);

  const handleGallery = () => {
    setOpenGallery(true);
  };

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: menuSchema,
    onSubmit: (values) => {
      console.log(values);
      if (isEdit) {
        handleEditMenu?.({
          menu: { ...values, menuDescription: 'abc', picture: posImage },
          categories: selectCategories.length > 0 ? selectCategories : [],
          onPrem: onPremises.isVisible ? onPremises : null,
          offPrem: offPremises.isVisible ? offPremises : null,
          custom: customVisibilityDevices.filter((item) => item.isVisible === true),
        });
      } else {
        handleCreateMenu?.({
          menu: {
            ...values,
            menuDescription: 'abc',
            picture: posImage,
          },
          categories: selectCategories.length > 0 ? selectCategories : [],
          onPrem: onPremises.isVisible ? onPremises : null,
          offPrem: offPremises.isVisible ? offPremises : null,
          custom: customVisibilityDevices.filter((item) => item.isVisible === true),
        });
      }
    },
  });

  useEffect(() => {
    if (values.menuName) {
      setTitle(values.menuName);
    } else {
      setTitle('Untitled');
    }
  }, [values.menuName]);

  const [selectCategories, setSelectedCategories] = useState<Option[]>(selectedCategoriesData || []);

  const [onPremises, setOnPremises] = useState<IVisibility>(initialOnPremValues);
  const [offPremises, setOffPremises] = useState<IVisibility>(initialOffPremises);
  // const [onPremises, setOnPremises] = useState<IVisibility>(initialOnPremValues || onPremData);
  // const [offPremises, setOffPremises] = useState<IVisibility>(initialOffPremises || offPremData);
  const [customVisibilityDevices, setCustomVisibilityDevices] = useState<IVisibility[]>(initialCustomSettings);
  const [customVisibilitySettings, setCustomVisibilitySettings] = useState({
    modal: false,
    message: false,
    isEdit: false,
    customizationAlertModal: false,
  });
  const [onPremSettings, setOnPremSettings] = useState({
    isEdit: false,
  });

  const [offPremSettings, setOffPremSettings] = useState({
    isEdit: false,
  });

  const handleSaveOnPremSettings = () => {
    setOnPremSettings({ ...onPremSettings, isEdit: true });
  };
  const handleSaveOffPremSettings = () => {
    setOffPremSettings({ ...onPremSettings, isEdit: true });
  };

  const handleEditOnPremSetttings = (data: IVisibility) => {
    setOnPremSettings({ ...onPremSettings, isEdit: false });
    setOnPremises(data);
  };

  const handleEditOffPremSetttings = (data: IVisibility) => {
    setOffPremSettings({ ...offPremSettings, isEdit: false });
    setOffPremises(data);
  };

  const handleChangeOnPremises = (e: React.ChangeEvent<any>) => {
    const isAnyVisible = customVisibilityDevices.some((setting) => setting.isVisible);
    if (isAnyVisible) {
      setCustomVisibilitySettings({ ...customVisibilitySettings, customizationAlertModal: true });
    } else {
      setOnPremises({ ...onPremises, isVisible: e.target.checked, isDefault: true, scheduling: [] });
    }
  };
  const handleChangeOffPremises = (e: React.ChangeEvent<any>) => {
    setOffPremises({ ...offPremises, isVisible: e.target.checked, isDefault: true, scheduling: [] });
  };

  const handleChangeVisibleMessage = () => {
    setCustomVisibilitySettings({ ...customVisibilitySettings, message: !customVisibilitySettings.message });
  };

  const handleCustomVisibilityModal = () => {
    if (customVisibilitySettings.modal == false) {
      setCustomVisibilitySettings({ ...customVisibilitySettings, modal: true });
      setOnPremises({ ...onPremises, isVisible: false });
      setOffPremises({ ...offPremises, isVisible: false });
    } else {
      setCustomVisibilitySettings({ ...customVisibilitySettings, modal: false, message: false });

      if (isEdit && customVisibilityData && customVisibilityData.length > 0) {
        const editCustomData = updateCustomSettings(initialCustomSettings, customVisibilityData);
        setCustomVisibilityDevices(editCustomData);
      }
    }
  };

  const handleChangeEditCustomSettings = (data: IVisibility[]) => {
    setCustomVisibilitySettings({ ...customVisibilitySettings, modal: true });
    setCustomVisibilityDevices(data);
  };

  const handleSaveCustomSettings = () => {
    const isAnyVisible = customVisibilityDevices.some((setting) => setting.isVisible);

    if (isAnyVisible) {
      setCustomVisibilitySettings({ ...customVisibilitySettings, modal: false, message: false, isEdit: true });
    } else {
      setCustomVisibilitySettings({ ...customVisibilitySettings, modal: false, message: false, isEdit: false });
    }
  };

  const handleCancelOnPrem = () => {
    if (isEdit) {
      if (onPremData) {
        setOnPremises(onPremData);
      }
      setOnPremSettings({ isEdit: true });
    } else {
      setOnPremises(initialOnPremValues);
      setOnPremSettings({ isEdit: true });
    }
  };
  const handleCancelOffPrem = () => {
    if (isEdit) {
      if (offPremData) {
        setOffPremises(offPremData);
      }
      setOffPremSettings({ isEdit: true });
    } else {
      setOffPremises(initialOffPremises);
      setOffPremSettings({ isEdit: true });
    }
  };
  // const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  // const handleSelectImage = (data: Image) => {
  //   setSelectedImage(data);
  // };

  const handleSelectedEditImage = (url: string) => {
    setPosImage(url);
    // setSelectedImage(null);
  };

  const handleContinue = () => {
    setCustomVisibilityDevices(initialCustomSettings);
    setCustomVisibilitySettings({ ...customVisibilitySettings, customizationAlertModal: false, isEdit: false });
  };
  const handleEditImage = (index: number) => {
    setEditModal(true);

    // setImage(deviceImages[index]);
  };

  const handleDeleteImage = (index: number) => {
    setDeleteImage(true);
  };
  const handleCloseEditModal = () => {
    setEditModal(false);
  };
  function updateCustomSettings(initialSettings: IVisibility[], newData: IVisibility[]) {
    const duplicateInitialSettingsArray = [...initialSettings];

    newData.forEach((newItem) => {
      const index = duplicateInitialSettingsArray.findIndex((initialItem) => initialItem.device === newItem.device);

      if (index !== -1) {
        duplicateInitialSettingsArray[index].scheduling = newItem.scheduling;
        duplicateInitialSettingsArray[index].isVisible = newItem.isVisible;
        duplicateInitialSettingsArray[index].isDefault = newItem.isDefault;
      }
    });

    return duplicateInitialSettingsArray;
  }

  useEffect(() => {
    if (isEdit) {
      if (onPremData && onPremData?.isVisible) {
        setOnPremises(onPremData);
        setOnPremSettings({ isEdit: true });
      } else {
        setOnPremises(initialOnPremValues);
        setOnPremSettings({ isEdit: false });
      }
      if (offPremData && offPremData?.isVisible) {
        setOffPremises(offPremData);
        setOffPremSettings({ isEdit: true });
      }

      if (customVisibilityData && customVisibilityData.length > 0) {
        const editCustomData = updateCustomSettings(initialCustomSettings, customVisibilityData);
        setCustomVisibilityDevices(editCustomData);
        setCustomVisibilitySettings({ ...customVisibilitySettings, isEdit: true });
      } else {
        setCustomVisibilityDevices(initialCustomSettings);
        setCustomVisibilitySettings({ ...customVisibilitySettings, isEdit: false });
      }

      setPosImage(menu?.picture);

      setTitle(values.menuName);
    }
  }, []);

  const handleReUpload = () => {
    setPosImage('');
    // setSelectedImage(null);
    handleGallery();
    setOpenReUploadModal(false);
    // setDeviceImages([]);
  };
  const handleReplaceImage = (index: number) => {
    setOpenReUploadModal(true);
  };

  const deleteImagefunction = () => {
    setPosImage('');
    // setSelectedImage(null);
    setDeleteImage(false);
    // setDeviceImages((prevImages) => {
    //   return prevImages.filter((imageItem, index) => index !== index);
    // });
  };
  const handleCloseModalGalleryModal = () => {
    // setSelectedImage(null);
    setOpenGallery(false);

    // setDeviceImages([]);
  };
  const closeCustomizationAlertModal = () => {
    setCustomVisibilitySettings({ ...customVisibilitySettings, customizationAlertModal: false });
  };
  const insertImage = (url: string) => {
    setPosImage(url);
  };

  return (
    <>
      <FormLayout
        steperLabel={steperLabel}
        steperHeight={steperHeight}
        marks={marks.reverse()}
        cancelPath={cancelPath}
        handleSave={handleSubmit}
        refData={refData}
      >
        <div ref={generalRef}>
          <BasePaper elevation={0} sx={style.paper}>
            <TypographyComponent variant="h2" sx={{ mb: 5 }}>
              General Info
            </TypographyComponent>

            <GridComponent container spacing={3}>
              <GridComponent item md={6}>
                <FormFields
                  label="Menu Name*"
                  placeholder="Title here"
                  value={values.menuName}
                  onChange={handleChange}
                  name="menuName"
                  error={errors.menuName && touched.menuName ? errors.menuName : null}
                />
              </GridComponent>
              <GridComponent item md={6}>
                <FormFields
                  label="POS Name*"
                  placeholder="Title here"
                  value={values.posDisplayName}
                  onChange={handleChange}
                  name="posDisplayName"
                  error={errors.posDisplayName && touched.posDisplayName ? errors.posDisplayName : null}
                />
              </GridComponent>
              <GridComponent item md={6}>
                <ColorPicker
                  value={values.posButtonColor}
                  label="POS Button Color"
                  onChange={handleChange}
                  name="posButtonColor"
                />
              </GridComponent>
              <GridComponent item md={6}>
                {menuId && (
                  <BoxComponent style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                    <BaseInputLabel style={style.labelTitle}>Menu ID</BaseInputLabel>
                    <TypographyComponent variant="h6" sx={{ mt: 1 }}>
                      Menu-{menuId}
                    </TypographyComponent>
                  </BoxComponent>
                )}
              </GridComponent>
              {posImage && posImage !== null ? (
                <GridComponent item md={12}>
                  <BaseInputLabel style={style.labelTitle}>Image</BaseInputLabel>

                  <GridComponent container spacing={3} sx={{ mt: 0.1 }}>
                    <GridComponent item>
                      <ImageSelectionCard
                        image={posImage}
                        handleEditImage={handleEditImage}
                        handleReplaceImage={handleReplaceImage}
                        handleDeleteImage={handleDeleteImage}
                        index={1}
                        title={devicesName.pos}
                      />
                    </GridComponent>
                  </GridComponent>
                </GridComponent>
              ) : (
                <GridComponent item md={12}>
                  <ImageSelection handleGallery={handleGallery} />
                </GridComponent>
              )}
            </GridComponent>
          </BasePaper>
        </div>
        <div ref={categoryRef}>
          <BasePaper elevation={0} sx={style.paper}>
            <TypographyComponent variant="h2" sx={{ mb: 5 }}>
              Categories
            </TypographyComponent>
            <MultiSelect
              placeHolder="Assign Categories"
              data={categories}
              selectedOptions={selectCategories}
              setSelectedOptions={setSelectedCategories}
            />
          </BasePaper>
        </div>
        <div ref={visibilityRef}>
          <BasePaper elevation={0} sx={style.paper}>
            <TypographyComponent variant="h2" sx={{ mb: 4 }}>
              Channel Visibility & Availability
            </TypographyComponent>
            <Premises
              label="On Prem"
              devicesName="(POS, KIOSK, mPOS, QR)"
              state={onPremises}
              handleChange={handleChangeOnPremises}
              name="onPrem"
              setState={setOnPremises}
              handleSave={handleSaveOnPremSettings}
              isEdit={onPremSettings.isEdit}
              handleEdit={handleEditOnPremSetttings}
              handleCancel={handleCancelOnPrem}
            />

            <Premises
              label="Off Prem"
              devicesName="(Online,Dashboard)"
              state={offPremises}
              handleChange={handleChangeOffPremises}
              name="offPrem"
              setState={setOffPremises}
              handleSave={handleSaveOffPremSettings}
              isEdit={offPremSettings.isEdit}
              handleEdit={handleEditOffPremSetttings}
              handleCancel={handleCancelOffPrem}
            />

            {customVisibilitySettings.isEdit == true && customVisibilityDevices?.length > 0 && (
              <CustomisedChannelSettings data={customVisibilityDevices} handleEdit={handleChangeEditCustomSettings} />
            )}
            {customVisibilitySettings.isEdit == false && (
              <TypographyComponent
                variant="h6"
                sx={{
                  textAlign: 'start',
                  color: '#008279',
                  fontWeight: '600',
                  mt: '26px',
                  '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
                }}
                onClick={handleChangeVisibleMessage}
              >
                Customize Individual Channels
              </TypographyComponent>
            )}
            {customVisibilitySettings.message && (
              <BoxComponent
                sx={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: { md: 'row', xs: 'column' },
                }}
              >
                <TypographyComponent
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                  }}
                >
                  Customizing individual channels will override On Prem and Off Prem preferences.
                </TypographyComponent>
                <BoxComponent
                  sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <ButtonComponent
                    sx={style.buttonsOption}
                    text="Continue"
                    variant="text"
                    onClick={handleCustomVisibilityModal}
                  />

                  <ButtonComponent
                    sx={style.buttonsOption}
                    text="Cancel"
                    variant="text"
                    onClick={handleChangeVisibleMessage}
                  />
                </BoxComponent>
              </BoxComponent>
            )}
          </BasePaper>
        </div>
      </FormLayout>

      {/* Modals */}
      <DialogComponent
        open={openGallery}
        fullWidth
        maxWidth="lg"
        sx={{ borderRadius: 0, bgcolor: 'rgba(0, 0, 0, 0.25)' }}
      >
        <ImageGallery
          handleCloseModal={handleCloseModalGalleryModal}
          insertImage={insertImage}
          setOpenGallery={setOpenGallery}
        />
      </DialogComponent>
      <DialogComponent
        open={editModal}
        fullWidth
        maxWidth="lg"
        sx={{ borderRadius: 0, bgcolor: 'rgba(0, 0, 0, 0.25)' }}
      >
        <EditImage data={posImage} onClose={handleCloseEditModal} handleSelectedEditImage={handleSelectedEditImage} />
      </DialogComponent>
      <DialogComponent open={customVisibilitySettings.modal} fullWidth maxWidth="lg" sx={{ borderRadius: 0 }}>
        <CustomVisibility
          state={customVisibilityDevices}
          setState={setCustomVisibilityDevices}
          handleCloseModal={handleCustomVisibilityModal}
          hanldeSaveSettings={handleSaveCustomSettings}
        />
      </DialogComponent>
      <DialogComponent
        open={customVisibilitySettings.customizationAlertModal}
        fullWidth
        maxWidth="md"
        sx={{ borderRadius: 0 }}
      >
        <CustomizationAlert handleContinue={handleContinue} handleCloseModal={closeCustomizationAlertModal} />
      </DialogComponent>
      <DialogComponent open={openReUploadModal} fullWidth maxWidth="md" sx={{ borderRadius: 0 }}>
        <ReplaceImage
          setOpen={setOpenReUploadModal}
          handleReUpload={handleReUpload}
          subTitle="A new image will be uploaded for POS & mPOS"
        />
      </DialogComponent>
      <DialogComponent open={deleteImage} fullWidth maxWidth="md" sx={{ borderRadius: 0 }}>
        <Delete
          open={deleteImage}
          setOpen={setDeleteImage}
          handleDelete={deleteImagefunction}
          subTitle="This Image will be removed for POS & mPOS"
        />
      </DialogComponent>
    </>
  );
}
