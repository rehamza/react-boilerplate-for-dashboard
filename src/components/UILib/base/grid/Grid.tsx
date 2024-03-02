import { Grid, GridProps } from '@mui/material';
import { ReactNode } from 'react';

export function GridComponent({ children, ...otherProps }: GridComponentProps) {
  return <Grid {...otherProps}>{children}</Grid>;
}

interface GridComponentProps extends Omit<GridProps, 'children'> {
  children: ReactNode;
}
