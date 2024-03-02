import { createTheme } from '@mui/material/styles';
export const theme = createTheme();
export const style = {
  buttonBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
};
