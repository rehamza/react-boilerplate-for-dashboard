import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { BaseTextField } from '../../UILib';
import theme from '../../../theme/theme';

interface Option {
  value: number;
  label: string;
}
interface MultiSelectProps {
  placeHolder: string;
  data: Option[];
  selectedOptions: Option[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}
export default function MultiSelect({ placeHolder, data, selectedOptions, setSelectedOptions }: MultiSelectProps) {
  const handleChange = (event: React.ChangeEvent<any>, newValue: Option[] | null) => {
    console.log('-----newValue---', newValue);
    setSelectedOptions(newValue || []);
  };

  return (
    <Autocomplete
      multiple
      options={data || []}
      getOptionLabel={(option) => option.label}
      filterSelectedOptions
      value={selectedOptions}
      onChange={handleChange}
      renderInput={(params) => <BaseTextField {...params} label={placeHolder} fullWidth />}
      renderOption={(props, option) => (
        <li {...props} style={{ padding: '20px', fontSize: '16px' }}>
          {option.label}
        </li>
      )}
      sx={{
        '& .MuiButtonBase-root': {
          border: `1px solid ${theme.palette.grey[500]}`,
          borderRadius: '6px',
          bgcolor: 'transparent',
        },
        '& .mui-1glvl0p-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator': {
          display: 'none',
        },
      }}
    />
  );
}
