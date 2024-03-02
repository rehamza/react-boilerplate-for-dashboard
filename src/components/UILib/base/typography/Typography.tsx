import { ReactNode } from 'react';
import Typography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export function TypographyComponent({ children, variant, ...otherProps }: TypographyProps) {
  return (
    <Typography variant={variant} {...otherProps}>
      {children}
    </Typography>
  );
}

interface TypographyProps extends Omit<MuiTypographyProps, 'children'> {
  children: ReactNode;
}
