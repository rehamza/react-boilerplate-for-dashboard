import { List, ListProps } from '@mui/material';
import { ReactNode } from 'react';

export function BaseList({ children, ...otherProps }: BaseInputLabelProps) {
  return <List {...otherProps}>{children}</List>;
}

interface BaseInputLabelProps extends Omit<ListProps, 'children'> {
  children: ReactNode;
}
