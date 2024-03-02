import { ReactNode } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export function BoxComponent({ children, ...otherProps }: BoxComponentProps) {
  return <Box {...otherProps}>{children}</Box>;
}

interface BoxComponentProps extends Omit<BoxProps, 'children'> {
  children?: ReactNode;
}
