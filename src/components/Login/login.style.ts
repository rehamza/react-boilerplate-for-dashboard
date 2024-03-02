const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  card: {
    width: {
      xs: '100%', // full width on extra-small screens
      sm: '75%', // 75% width on small screens
      md: '50%', // 50% width on medium screens
      lg: '33%', // 33% width on large screens
      xl: '33%', // 25% width on extra-large screens
    },
    height: {
      xs: 200, // fixed height on extra-small screens
      sm: 250, // increased height on small screens
      md: 300, // further increased height on medium screens
      lg: 350, // and so on for large screens
      xl: 400, // and extra-large screens
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  h1: {
    paddingBottom: '20px',
  },
};

export default style;
