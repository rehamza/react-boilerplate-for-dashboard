import React from 'react'; // Make sure to import React
import Divider, { DividerProps } from '@mui/material/Divider';

type AdditionalProps = Omit<DividerProps, 'variant' | 'oreintation'>;

interface CustomDividerProps extends AdditionalProps {
  color?: string;
  width?: string | number;
}

export function DividerComponent({ color, width, ...otherProps }: CustomDividerProps) {
  const style: React.CSSProperties = {
    backgroundColor: color,
    width: width,
  };

  return <Divider style={style} {...otherProps} />;
}
