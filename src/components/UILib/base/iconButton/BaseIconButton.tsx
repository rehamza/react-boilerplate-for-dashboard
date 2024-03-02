import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

interface BaseIconButtonProps extends IconButtonProps {
  children: React.ReactNode;
}

export function BaseIconButton({ children, ...otherProps }: BaseIconButtonProps) {
  return <IconButton {...otherProps}>{children}</IconButton>;
}
