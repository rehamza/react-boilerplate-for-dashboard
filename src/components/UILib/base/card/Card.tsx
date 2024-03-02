import { Card, CardProps } from '@mui/material';
import { ReactNode } from 'react';
// import Card, { CardProps } from '@mui/material/Card';

export function CardComponent({ children, ...otherProps }: CardComponentProps) {
  return <Card {...otherProps}>{children}</Card>;
}

interface CardComponentProps extends Omit<CardProps, 'children'> {
  children: ReactNode;
}
