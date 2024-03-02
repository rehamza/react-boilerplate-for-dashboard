import { createTheme } from '@mui/material/styles';

export const theme = createTheme();

export const style = {
  mainBox: {
    // background: '#F9F9F9',

    flexDirection: 'column',
    display: 'flex',
    height: { md: '80vh', xs: '100%' },
    padding: '2rem 4rem 0px 3rem',
  },

  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    ml: 3,
  },

  title: {
    marginBottom: { xs: 1, md: 0 },
    fontSize: { xs: 24, md: 30 },
    fontWeight: '400',
  },
  searchBox: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '464px',
    },
    color: '#888D95',
    fontSize: 17.33,
    fontFamily: 'Poppins',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  buttonBox: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  searchBarAndButton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', md: 'row' },
    marginBottom: 2,
    mt: 4,
    gap: { xs: 4 },
  },
  fileButton: {
    display: 'inline-flex',
    height: '49px',
    gap: '10px',
    borderRadius: '9.273px',
    textTransform: 'none',
    fontSize: 17,
    color: '#008279',
    fontWeight: '500',
  },
  galleryBoxtitle: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    background: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
};
