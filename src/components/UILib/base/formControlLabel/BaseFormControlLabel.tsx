import React from 'react';
import { FormControlLabel, FormControlLabelProps } from '@mui/material';

interface BaseFormControlLabelProps extends Omit<FormControlLabelProps, 'children'> {
  children?: React.ReactNode;
}

export function BaseFormControlLabel({ children, ...otherProps }: BaseFormControlLabelProps) {
  return <FormControlLabel {...otherProps}>{children}</FormControlLabel>;
}
