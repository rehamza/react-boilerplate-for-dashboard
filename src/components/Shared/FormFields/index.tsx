import { BaseInputLabel, BaseTextField, BoxComponent } from '../../UILib';
import { InputProps } from '@mui/material';

interface FormFieldsProps {
  label: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: any;
  inputProps?: InputProps;
  multiline?: boolean; // Make multiline prop optional
  rows?: number; // Make rows prop optional // Make InputProps optional
}

export default function FormFields({
  label,
  placeholder,
  value,
  onChange,
  name,
  error,
  multiline,
  rows = 1,
  inputProps = {},
  ...props
}: FormFieldsProps) {
  return (
    <BoxComponent style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '0.25rem' }}>
      <BaseInputLabel style={{ color: 'grey.700', fontSize: '18px', fontWeight: '400' }}>{label}</BaseInputLabel>
      <BaseTextField
        multiline={multiline ?? rows > 1} // Use multiline prop if provided, or determine based on rows prop
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        fullWidth
        {...props}
        name={name}
        error={error}
        helperText={error}
        InputProps={{ ...inputProps, readOnly: inputProps.readOnly ?? false }} // Merge inputProps and set readOnly to false if not provided
      />
    </BoxComponent>
  );
}
