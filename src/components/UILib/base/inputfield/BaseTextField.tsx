'use client';
import { Theme, styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

export const BaseTextField = styled(TextField)(
  ({ theme, error, verified }: { theme?: Theme; error?: boolean; verified?: boolean }) => ({
    width: '100%',
    backgroundColor: '#fff',
    // height: '50px',
    borderRadius: '10px',
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: error ? '#E24545' : verified ? '#00C56C' : '#f4f4f8',
        borderRadius: '12px',
      },
      '& .MuiInputBase-input.MuiOutlinedInput-input': {
        fontSize: '16px',
        height: '20px',
      },
      '&:hover fieldset': {
        borderRadius: '12px',
      },
      '&.Mui-focused fieldset': {
        borderColor: error ? '#E24545' : verified ? '#00C56C' : '#f4f4f8',
        borderRadius: '12px',
      },
    },
  })
);
