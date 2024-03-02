import React from 'react';
import { BasePaper, BoxComponent, GridComponent, TypographyComponent } from '../../UILib';
import FormFields from '../FormFields';
import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { useState } from 'react';
import DynamicCheckboxes from '../DynamicCheckBox';
import CalculatePrices from '../CalculatePrices';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface CounterProps {
  label: string;
  value: number;
  haveButton?: boolean;
}

interface Item {
  size: string;
  price: string;
  totalPrice: string;
}

const TaxFormSizePrice: React.FC<CounterProps> = ({ label, value, haveButton }) => {
  const [items, setItems] = useState<Item[]>([
    { size: '', price: '', totalPrice: '' },
    { size: '', price: '', totalPrice: '' },
  ]);

  const handleAddField = () => {
    // Clone the current items array and add a new item
    console.log('Add Field Called');
    const newItems = [...items, { size: '', price: '', totalPrice: '' }];
    setItems(newItems);
  };

  const handleFieldChange = (index: number, fieldName: keyof Item, value: string) => {
    // Update the value of a specific field
    const newItems = [...items];
    newItems[index][fieldName] = value;
    setItems(newItems);
  };

  const handleRemoveField = (index: number) => {
    // Remove the field at the specified index
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
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

  return (
    <>
      {' '}
      <BoxComponent sx={{ mt: 2 }}>
        {items.map((item, index) => (
          <GridComponent container>
            <BasePaper
              sx={{ width: '100%', marginBottom: '20px', background: '#FAFAFA', borderRadius: 2, boxShadow: 0 }}
            >
              <GridComponent
                item
                md={12}
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}
              >
                <IconButton onClick={() => handleRemoveField(index)}>
                  <CloseOutlinedIcon />
                </IconButton>
              </GridComponent>

              <GridComponent item md={12} display={'flex'} sx={{ mb: 2 }}>
                <GridComponent item md={6} sx={{ ml: 3 }}>
                  <FormFields
                    label="Size"
                    placeholder="Title here"
                    value={item.size}
                    onChange={(e) => handleFieldChange(index, 'size', e.target.value)}
                    name="size"
                  />
                </GridComponent>
                <GridComponent item md={3} sx={{ ml: 3 }}>
                  <FormFields
                    label="Price*"
                    placeholder="$"
                    value={item.price}
                    onChange={(e) => handleFieldChange(index, 'price', e.target.value)}
                    name="size"
                  />
                </GridComponent>
                <GridComponent item md={3} sx={{ ml: 3, mr: 3 }}>
                  <FormFields
                    label="Total Price"
                    placeholder="Title here"
                    value={`$${item.price}`}
                    name="totalPrice"
                    onChange={(e) => handleFieldChange(index, 'price', e.target.value)}
                    inputProps={{ readOnly: true, disabled: true, sx: { backgroundColor: '#E9E9F4' } }}
                  />
                </GridComponent>
              </GridComponent>
            </BasePaper>
          </GridComponent>
        ))}
        <TypographyComponent
          sx={{ mt: 1 }}
          style={{
            display: 'flex',
            color: '#008279',
            textDecoration: 'none', // Remove underline
            cursor: 'pointer', // Set cursor to pointer
            fontSize: 18,
            fontWeight: '400',
          }}
          onClick={() => handleAddField()}
        >
          Add field
        </TypographyComponent>

        <BoxComponent sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
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
      </BoxComponent>
      <DynamicCheckboxes options={taxArray} setOptions={settaxArray} disabled={!isLinked} />
      <CalculatePrices options={calTaxArray} setOptions={setcalTaxArray}></CalculatePrices>
    </>
  );
};

export default TaxFormSizePrice;
