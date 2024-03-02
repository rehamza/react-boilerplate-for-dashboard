import { BaseChip } from '../../UILib';
import { theme } from '../Table/TableHeader/tableHeader.style';
import { ChipPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

export interface ChipProps {
  label: string;
  isDisabled: boolean;
  variant: OverridableStringUnion<'filled' | 'outlined', ChipPropsVariantOverrides> | undefined;
  handleDelete?: () => void;
}

export default function Chip({ label, isDisabled, variant, handleDelete, ...otherProps }: ChipProps) {
  return (
    <BaseChip
      onDelete={handleDelete}
      sx={{
        '&.MuiChip-outlined': { borderRadius: '6px' },
        '&.MuiChip-root': {
          color: isDisabled === true ? theme.palette.grey[500] : theme.palette.grey[900],
          border: isDisabled === true ? `1px solid ${theme.palette.grey[500]}` : '1px solid black',
        },
      }}
      label={label}
      variant={variant}
      {...otherProps}
    />
  );
}
