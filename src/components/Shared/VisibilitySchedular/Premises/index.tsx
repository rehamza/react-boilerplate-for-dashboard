import { BaseIconButton, BoxComponent, TypographyComponent } from '../../../UILib';

import ButtonComponent from '../../Button';
import Visibility from '../Visibility';
import { style } from './premises.style';
import ToggleButtonComponent from '../../Button/ToggleButton';
import DefaultRadioComponent from '../DefaultRadio';
import { IVisibility, IScheduling } from '../../../../types/MenuManager/menu';
import PremisesSetting from '../PremSettings';
import SwitchButton from '../../Button/SwitchButton';
import { Edit } from '../../../../assets/Icons';

interface PremisesProps {
  devicesName: string;
  label: string;
  state: IVisibility;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  setState: React.Dispatch<IVisibility>;
  handleSave: () => void;
  isEdit: boolean;
  handleEdit: (data: IVisibility) => void;
  handleCancel: () => void;
}

export default function Premises({
  devicesName,
  label,
  state,
  handleChange,
  name,
  setState,
  handleSave,
  isEdit,
  handleEdit,
  handleCancel,
}: PremisesProps) {
  const handleToggleChange = () => {
    setState({ ...state, isDefault: !state.isDefault });
  };
  const handleVisibilitySchedule = (array: IScheduling[]) => {
    setState({ ...state, scheduling: array });
  };

  return (
    <>
      <BoxComponent sx={style.mainBox}>
        <BoxComponent sx={{ display: 'flex', justifyContent: 'space-between', px: 2, py: 1 }}>
          <BoxComponent>
            <TypographyComponent sx={style.label}>{label}</TypographyComponent>
            <TypographyComponent sx={style.sublabel}>{devicesName}</TypographyComponent>
          </BoxComponent>
          <BoxComponent>
            {isEdit && state.isVisible && (
              <BaseIconButton onClick={() => handleEdit(state)}>
                <Edit />
              </BaseIconButton>
            )}
            <SwitchButton checked={state.isVisible} onChange={handleChange} name={name} />
          </BoxComponent>
        </BoxComponent>

        {isEdit && state.isVisible && <PremisesSetting data={state} />}
      </BoxComponent>

      {isEdit == false && state.isVisible ? (
        <BoxComponent sx={style.visibilityBox}>
          <ToggleButtonComponent selectedOption={state.isDefault} handleToggleChange={handleToggleChange} />

          {state.isDefault ? (
            <DefaultRadioComponent isDefault={state.isDefault} />
          ) : (
            <Visibility visibilityData={state} handleChange={handleVisibilitySchedule} />
          )}
          <BoxComponent sx={{ display: 'flex', gap: 2, justifyContent: { md: 'flex-end', xs: 'center' }, my: '30px' }}>
            <ButtonComponent text="Cancel" variant="outlined" onClick={() => handleCancel()} />
            <ButtonComponent text="Save" variant="contained" onClick={() => handleSave()} />
          </BoxComponent>
        </BoxComponent>
      ) : (
        ''
      )}
    </>
  );
}
