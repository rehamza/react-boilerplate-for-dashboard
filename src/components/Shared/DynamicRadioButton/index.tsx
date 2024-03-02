import React from 'react';

import {
  BaseFormControl,
  BaseFormControlLabel,
  BaseRadioButton,
  BaseRadioGroup,
  TypographyComponent,
} from '../../UILib';

interface DynamicRadioProps {
  options: { label: any; value: any }[];
  selectedValue: any;
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
}

export default function DynamicRadio({ options, selectedValue, setSelectedValue }: DynamicRadioProps) {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue((event.target as HTMLInputElement).value);
    console.log(event.target.value);
  };

  return (
    <BaseFormControl component="fieldset">
      <BaseRadioGroup
        aria-label="options"
        name="options"
        value={selectedValue}
        onChange={handleRadioChange}
        sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}
      >
        {options.map((option, index) => (
          <BaseFormControlLabel
            key={index}
            value={option.value}
            control={<BaseRadioButton />}
            label={
              <TypographyComponent sx={{ fontSize: options.length === 2 ? 20 : 18 }}>
                {option.label}
              </TypographyComponent>
            }
          />
        ))}
      </BaseRadioGroup>
    </BaseFormControl>
  );
}
