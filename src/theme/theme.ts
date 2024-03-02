import { createTheme } from '@mui/material/styles';
interface PaletteOptions {
  grey: object;
  white: object;
  customGreen: object;

  warning: object;
  success: object;
  error: object;
}

const textColor = '#000000';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f4f4f8',
          fontFamily: 'Poppins',
        },
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px #E9E9F4',
          webkitBoxShadow: 'inset 0 0 6px #E9E9F4',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#4F46E5',
          outline: '1px solid #FAFAFA',
          borderRadius: '8px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#00A99D',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#008C86',
          },
        },

        outlined: {
          color: '#00A99D',
          backgroundColor: '#ffff',
          borderColor: '#00A99D',
          '&:hover': {
            backgroundColor: 'rgba(0, 169, 157, 0.08)',
            border: '1px solid #00A99D',
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: '1px',
          marginRight: '1px',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#4F46E5',
    },
    white: {
      100: '#FFFFFF',
      150: '#FAFAFA',
      200: '#f4f4f8', // used for background
    },
    grey: {
      50: '#24252880', //used
      100: '#F5F5F5',
      200: '#F4F4F8',
      300: '#ECECF5',
      400: '#E9E9F4', // used
      450: '#B7BAC3',
      500: '#888D95',
      600: '#53575D',
      700: '#242528', // used
      800: '#323232CC',
      900: '#59595a',
      1000: 'rgba(0, 0, 0, 0.25)', //used
    },
    customGreen: {
      100: '#DCF4F2',
      200: '#34C759',
      300: '#4F46E5',
    },

    warning: {
      main: '#FBC04D',
    },
    success: {
      main: '#00C56C',
    },
    error: {
      main: '#E24545',
    },
  } as PaletteOptions,

  typography: {
    fontFamily: 'Poppins, sans-serif',
    color: '#53575D',
    wordWrap: 'break-word',
    h1: {
      fontSize: '36px',
      color: '#242528',
      fontWeight: 500, // used
    },
    h2: {
      fontSize: '30px',
      color: textColor,
      fontWeight: 500, // used
    },
    h3: {
      fontSize: '24px', // used
      color: '#242528',
      fontWeight: 500,
    },
    h4: {
      fontSize: '24px', // used
      color: '#242528',
      fontWeight: 500,
    },
    h5: {
      fontSize: 20,
      color: 'grey.600', // used
      fontWeight: 400,
    },
    h6: {
      fontSize: 18,
      color: '#242528',

      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 18,
      color: 'grey.500',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 14,
      color: textColor,

      fontWeight: 400,
    },
    body1: {
      fontSize: 12,
      color: textColor,
    },
    caption: {
      fontSize: 12,
      color: '#888D95',
      fontWeight: 400,
    },
  } as any,
});

export default theme;
