import React from 'react';
import { Checkbox } from '@mui/material';
import { BaseFormControlLabel, BoxComponent, GridComponent } from '../../UILib';

interface Option {
  value: boolean;
  taxValue: number;
  name: string;
}

interface DynamicCheckboxesProps {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  disabled?: boolean;
}

const DynamicCheckboxes: React.FC<DynamicCheckboxesProps> = ({ options, setOptions, disabled }) => {
  const handleCheckboxChange = (index: number) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].value = !updatedOptions[index].value;
      console.log(updatedOptions);
      return updatedOptions;
    });
  };

  return (
    <BoxComponent sx={{ width: '100%' }}>
      <GridComponent container sx={{ flexWrap: 'nowrap' }}>
        {options.map((option, index) => (
          <GridComponent item key={index} sx={{ width: '100%' }}>
            <BaseFormControlLabel
              control={<Checkbox checked={option.value} onChange={() => handleCheckboxChange(index)} />}
              label={option.name}
              name={option.name}
              disabled={disabled}
            />
          </GridComponent>
        ))}
      </GridComponent>
    </BoxComponent>
  );
};

export default DynamicCheckboxes;
