import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { BoxComponent } from '../../../UILib';
import { style } from '../Premises/premises.style';

interface DefaultRadioProps {
  isDefault: boolean;
}
export default function DefaultRadioComponent({ isDefault }: DefaultRadioProps) {
  return (
    <BoxComponent sx={style.defaultSettingBox}>
      <RadioGroup row aria-label="daysOfWeek" name="daysOfWeek">
        <FormControlLabel
          control={<Radio style={{ color: '#00A99D' }} checked={isDefault} />}
          label="Monday - Sunday (hours of operation)"
        />
      </RadioGroup>
    </BoxComponent>
  );
}
