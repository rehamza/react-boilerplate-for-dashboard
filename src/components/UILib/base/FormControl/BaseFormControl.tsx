import { FormControl, FormControlProps } from '@mui/material';
import { ReactNode } from 'react';

export function BaseFormControl({ children, ...otherProps }: BaseFormControlProps) {
  return <FormControl {...otherProps}>{children}</FormControl>;
}

interface BaseFormControlProps extends Omit<FormControlProps, 'children'> {
  children: ReactNode;
}
