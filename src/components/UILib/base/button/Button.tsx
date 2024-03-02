import React, { ReactNode } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { BoxComponent } from '../box/Box';

export const ButtonComponent = ({
  children,
  onClick,
  variant,
  types,
  backgroundColor,
  size,
  sx,
  disabled,
  ...otherProps
}: ButtonComponentProps) => {
  return (
    <Button
      onClick={onClick}
      sx={variant === 'contained' ? btnStyles.containedBtn : variant === 'outlined' ? btnStyles.outlinedBtn : sx}
      {...otherProps}
      size={size}
      variant={variant}
      disabled={disabled}
    >
      {variant ? <BoxComponent>{children}</BoxComponent> : children}
    </Button>
  );
};

const btnStyles = {
  outlinedBtn: {
    height: '44px',
    width: 'auto',
    padding: '10px 20px 10px 20px',
    color: 'primary.dark',
    backgroundColor: 'transparent',
    textTransform: 'none',
    border: '1px solid #e36720',
    borderRadius: '8px',
  },
  containedBtn: {
    height: '44px',
    padding: '10px 20px 10px 20px',
    textTransform: 'none',
    color: 'secondary.light',
    borderRadius: '8px',
    backgroundColor: 'primary.dark',
    boxShadow: 'none',
    '&.Mui-disabled': {
      backgroundColor: 'grey.400',
    },
  },
};

interface ButtonComponentProps extends Omit<ButtonProps, 'children'> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: ReactNode;
  variant?: 'contained' | 'outlined';
  types?: 'save' | 'cancel' | undefined;
}
