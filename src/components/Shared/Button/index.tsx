import React, { ReactNode } from 'react';
import { BaseButton } from '../../UILib';

type ButtonVariant = 'text' | 'outlined' | 'contained';

interface AppProps {
  onClick?: () => void; // Define your function type here
  text?: string;
  variant: ButtonVariant;
  icon?: ReactNode;
  sx?: object;
  inputFile?: React.RefObject<HTMLInputElement>;
}

const style = {
  display: 'inline-flex',
  height: '49px',
  padding: { md: '15.281px 36px', xs: '11px' },
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '9.273px',
  textTransform: 'none',
  fontSize: 17,
};

const ButtonComponent: React.FC<AppProps> = ({ onClick, text, variant, sx, icon, inputFile }) => (
  <BaseButton variant={variant} sx={sx ? sx : style} onClick={onClick}>
    {icon && icon}
    {text}
    {inputFile && <input type="file" ref={inputFile} style={{ display: 'none' }} />} {/* Render file input */}
  </BaseButton>
);
export default ButtonComponent;
