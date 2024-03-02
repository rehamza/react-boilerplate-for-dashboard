import React from 'react';
import { BoxComponent, GridComponent, TypographyComponent } from '../../UILib';
import SwitchButton from '../Button/SwitchButton';

interface Option {
  value: boolean;
  subText: string;
  name: string;
}

interface DynamicCheckboxesProps {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

const CalculatePrices: React.FC<DynamicCheckboxesProps> = ({ options, setOptions }) => {
  const handleCheckboxChange = (index: number) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index].value = !updatedOptions[index].value;
      console.log(updatedOptions);
      return updatedOptions;
    });
  };

  return (
    <BoxComponent>
      <GridComponent container spacing={2} mt={3}>
        {options.map((option, index) => (
          <GridComponent item xs={6} key={index}>
            <BoxComponent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <BoxComponent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <TypographyComponent sx={{ typography: 'h5' }}>{option.name}</TypographyComponent>
                <TypographyComponent sx={{ typography: 'subtitle1' }}>{option.subText}</TypographyComponent>
              </BoxComponent>
              <BoxComponent>
                <SwitchButton checked={option.value} onChange={() => handleCheckboxChange(index)} />
              </BoxComponent>
            </BoxComponent>
          </GridComponent>
        ))}
      </GridComponent>
    </BoxComponent>
  );
};

export default CalculatePrices;
