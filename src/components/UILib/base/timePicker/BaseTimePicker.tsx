import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function BaseTimePicker({ ...otherProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker {...otherProps} />
    </LocalizationProvider>
  );
}
