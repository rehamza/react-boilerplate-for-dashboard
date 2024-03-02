import { Chip, ChipProps } from '@mui/material';

export function BaseChip({ ...otherProps }: ChipProps) {
  return <Chip {...otherProps} />;
}
