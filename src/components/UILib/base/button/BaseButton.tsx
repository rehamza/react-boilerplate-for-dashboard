import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface BaseButtonProps extends Omit<ButtonProps, 'children'> {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  types?: string;
}

export function BaseButton({ children, onClick, variant, types, sx, size, disabled, ...otherProps }: BaseButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={sx}
      size={size}
      variant={variant}
      disabled={disabled}
      {...otherProps}
      component="span"
    >
      {children}
    </Button>
  );
}
