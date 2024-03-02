import React, { ChangeEvent } from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { BaseTextField } from '../../UILib';

interface SearchBarProps {
  search?: string;
  handleSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
  sx?: object;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, handleSearch, sx }) => {
  return (
    <BaseTextField
      variant="outlined"
      fullWidth
      placeholder="Type to search..."
      value={search}
      onChange={handleSearch}
      sx={sx ? sx : { textDecoration: 'none', outline: 'none', maxWidth: '25rem' }} // Conditional application of styles
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
