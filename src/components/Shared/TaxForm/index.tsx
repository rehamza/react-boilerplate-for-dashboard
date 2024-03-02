import React from 'react';
import { BoxComponent, GridComponent, TypographyComponent } from '../../UILib';
import FormFields from '../FormFields';
import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { useState } from 'react';
import DynamicCheckboxes from '../DynamicCheckBox';
import CalculatePrices from '../CalculatePrices';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';

interface BasePriceProps {
  onItemPriceChange: (price: string) => void;
  onTotalPriceChange: (price: number) => void;
  onCalTaxArrayChange: (calTaxArray: any[]) => void;
}

const TaxFormBaseprice: React.FC<BasePriceProps> = ({ onItemPriceChange, onTotalPriceChange, onCalTaxArrayChange }) => {
  const [itemPrice, setItemPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState<number | null>(0);

  const handlepriceChange = (event: any) => {
    // Remove the dollar sign before updating the state
    const value = event.target.value.replace('$', '');
    setItemPrice(value);
    onItemPriceChange(value);

    handleTotalPriceChange(value);
  };

  const handleTotalPriceChange = (value: number) => {
    let totalTax;
    let numericValue = +value;
    if (!numericValue) numericValue = 0;
    if (!isLinked) totalTax = 0;
    else {
      const trueTaxValues = taxArray.filter((item) => item.value).map((item) => item.taxValue);
      const totalTaxpercentage = trueTaxValues.reduce((acc, curr) => acc + curr, 0);
      totalTax = (totalTaxpercentage / 100) * value;
    }
    setTotalPrice(numericValue === 0 ? 0 : numericValue + totalTax);
    onTotalPriceChange(numericValue === 0 ? 0 : numericValue + totalTax);
  };

  const [taxArray, settaxArray] = useState([
    { name: 'State Law 5%', taxValue: 5, value: false },
    { name: 'Country Law 5%', taxValue: 5, value: false },
    { name: 'Federal Law 5%', taxValue: 5, value: true },
    { name: 'Special Law 5%', taxValue: 5, value: true },
    { name: 'Special Law 5%', taxValue: 5, value: false },
  ]);

  const [calTaxArray, setcalTaxArray] = useState([
    { name: 'Calculate prices with tax included', subText: 'Tax is included in this item’s price', value: false },
    { name: 'Takeout Exception', subText: 'This item is taxed except when it is ordered for takeout', value: false },
  ]);

  const [isLinked, setIsLinked] = useState(false);
  const handleIconChange = () => {
    setIsLinked(!isLinked);
  };
  useEffect(() => {
    handleTotalPriceChange(+itemPrice);
    onCalTaxArrayChange(calTaxArray);
    console.log(calTaxArray);
  }, [taxArray, isLinked, isLinked]);

  return (
    <>
      <GridComponent container spacing={3} sx={{ mt: 2 }}>
        <GridComponent item md={6}>
          <FormFields
            label="Base Price"
            placeholder="$"
            value={`$${itemPrice}`}
            onChange={handlepriceChange}
            name="itemprice"
          />
        </GridComponent>
        <GridComponent item md={6}>
          <FormFields
            label="Total Price"
            placeholder="Title here"
            value={`$${totalPrice}`}
            name="totalPrice"
            inputProps={{ readOnly: true, disabled: true }}
          />
        </GridComponent>
      </GridComponent>
      <BoxComponent sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
        <TypographyComponent
          sx={{
            mr: 1,
            fontSize: 18,
            fontFamily: 'Poppins',
            fontWeight: '400',
            wordWrap: 'break-word',
            textAlign: 'center',
          }}
        >
          Tax
        </TypographyComponent>

        {isLinked ? (
          <IconButton onClick={handleIconChange}>
            <LinkOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleIconChange}>
            <LinkOffOutlinedIcon />
          </IconButton>
        )}
        <TypographyComponent
          sx={{
            ml: 1,
            color: '#888D95',
            fontSize: 17,
            fontFamily: 'Poppins',
            fontWeight: '400',
            wordWrap: 'break-word',
          }}
        >
          Unlike the tax setting from the parent setting
        </TypographyComponent>
      </BoxComponent>
      <BoxComponent sx={{ mt: 4 }}>
        <DynamicCheckboxes options={taxArray} setOptions={settaxArray} disabled={!isLinked} />
        <CalculatePrices options={calTaxArray} setOptions={setcalTaxArray}></CalculatePrices>
      </BoxComponent>
    </>
  );
};

export default TaxFormBaseprice;
