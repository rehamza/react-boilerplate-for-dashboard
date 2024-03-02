import { Container, ContainerProps } from '@mui/material';
import { ReactNode } from 'react';

export function BaseContainer({ children, ...otherProps }: BaseContainerProps) {
  return <Container {...otherProps}>{children}</Container>;
}

interface BaseContainerProps extends Omit<ContainerProps, 'children'> {
  children: ReactNode;
}
