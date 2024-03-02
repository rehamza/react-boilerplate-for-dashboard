export const style = {
  mainBox: {
    maxWidth: 240,
    maxHeight: 240,
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    mb: 8,
    cursor: 'pointer',
  },
  imageContainer: {
    width: '240px',
    height: '240px',
    position: 'relative',
    overflow: 'hidden',
    bgcolor: 'white',
    border: '1px solid red',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '240px',
    height: '220px',
    background: 'rgba(0, 169, 157, 0.4)',
  },
  typographyBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
  },
};
