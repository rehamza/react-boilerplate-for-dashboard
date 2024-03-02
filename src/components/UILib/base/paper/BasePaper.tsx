import { Paper, PaperProps } from '@mui/material';
import { ReactNode } from 'react';

export function BasePaper({ children, ...otherProps }: BasePaperProps) {
  return <Paper {...otherProps}>{children}</Paper>;
}

interface BasePaperProps extends Omit<PaperProps, 'children'> {
  children: ReactNode;
}
