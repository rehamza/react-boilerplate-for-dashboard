import { Link, LinkProps } from '@mui/material';
import { ReactNode } from 'react';

export function BaseLink({ children, ...otherProps }: BaseLinkProps) {
  return <Link {...otherProps}>{children}</Link>;
}

interface BaseLinkProps extends Omit<LinkProps, 'children'> {
  children: ReactNode;
}
