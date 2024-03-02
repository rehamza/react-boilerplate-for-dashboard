import { InputLabel, InputLabelProps } from '@mui/material';
import { ReactNode } from 'react';

export function BaseInputLabel({ children, ...otherProps }: BaseInputLabelProps) {
  return <InputLabel {...otherProps}>{children}</InputLabel>;
}

interface BaseInputLabelProps extends Omit<InputLabelProps, 'children'> {
  children: ReactNode;
}
