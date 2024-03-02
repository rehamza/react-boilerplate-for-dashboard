import React, { useState } from 'react';
import SwitchButton from '../Button/SwitchButton';
import { BoxComponent, GridComponent, TypographyComponent } from '../../UILib';
import { Add, Remove } from '../../../assets/Icons';
import ButtonComponent from '../Button';
import { style } from './stockMinandMax.style';

interface CounterProps {
  label: string;
  value: number;
  haveButton?: boolean;
}

const Counter: React.FC<CounterProps> = ({ label, value, haveButton }) => {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <>
      <TypographyComponent variant="subtitle1">{label}</TypographyComponent>
      <BoxComponent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <GridComponent container alignItems="center" spacing={1} sx={{ display: 'flex' }}>
          <GridComponent item>
            <ButtonComponent
              variant="outlined"
              onClick={decrement}
              sx={style.buttons}
              icon={<Remove sx={style.countText} />}
            />
          </GridComponent>
          <GridComponent item>
            <TypographyComponent variant="subtitle1">{count}</TypographyComponent>
          </GridComponent>
          <GridComponent item>
            <ButtonComponent
              variant="outlined"
              onClick={increment}
              sx={style.buttons}
              icon={<Add sx={style.countText} />}
            />
          </GridComponent>
          <GridComponent item sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {haveButton && <SwitchButton checked={checked} onChange={handleChange} />}
          </GridComponent>
        </GridComponent>
      </BoxComponent>
    </>
  );
};

export default Counter;
