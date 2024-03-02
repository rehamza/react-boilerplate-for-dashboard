import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { BaseInputLabel, BoxComponent, TypographyComponent, BaseIconButton } from '../../UILib';
import { style } from './colorPicker.style';
import { Edit } from '../../../assets/Icons';
interface ColorPickerProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  error?: any;
}
export default function ColorPicker({ value, onChange, name, label }: ColorPickerProps) {
  const handleIconClick = () => {
    const colorInput = document.getElementById(name);
    colorInput?.click();
  };

  return (
    <BoxComponent sx={style.mainBox}>
      <BaseInputLabel sx={style.label}>{label}</BaseInputLabel>

      <BoxComponent sx={style.textBox}>
        <div
          style={{
            width: '55px',
            height: '52px',
            background: value,
            borderRadius: '12px',
            border: '1px #ECECF5 solid',
          }}
        />
        <input type="color" id={name} name={name} value={value} onChange={onChange} style={{ visibility: 'hidden' }} />

        <TypographyComponent style={style.textColor}>{value}</TypographyComponent>
        <InputAdornment position="start" sx={{ marginLeft: 'auto' }}>
          <BaseIconButton edge="start" onClick={handleIconClick}>
            <Edit />
          </BaseIconButton>
        </InputAdornment>
      </BoxComponent>
    </BoxComponent>
  );
}
