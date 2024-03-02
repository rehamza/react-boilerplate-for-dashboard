import { ReactNode } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BaseBreadcrumbsProps {
  children: ReactNode;
}

export function BaseBreadcrumbsComponent({ children, ...otherProps }: BaseBreadcrumbsProps) {
  return (
    <Breadcrumbs {...otherProps} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {children}
    </Breadcrumbs>
  );
}
