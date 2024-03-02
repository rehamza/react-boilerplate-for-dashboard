export const style = {
  mainBox: {
    width: 390,
    height: '100%',
    position: 'relative',
    background: 'white',
    padding: 2,
  },
  childList: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  AIOIcon: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  openArrow: {
    backgroundColor: 'grey.50',
    borderRadius: '0 50% 50% 0',
    display: 'flex',
    float: 'right',
    position: 'fixed',
    top: 70,
    width: 33,
    height: 28,
    zIndex: 1000,
    '&:hover': {
      backgroundColor: 'grey.900',
    },
  },
  icon: {
    width: 12,
    height: 12,
  },
  userProfile: {
    display: 'flex',
    marginTop: '30px',
    py: '20px',
    gap: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userAvatar: {
    width: 38,
    height: 38,
    borderRadius: '170.03%',
  },
  userTitle: {
    color: 'grey.700',
    fontStyle: 'normal',
    fontSize: '24px',
    fontWeight: 600,
  },
  search: {
    width: '100%',
    color: '#888D95',
    fontSize: 17.33,
    fontFamily: 'Poppins',
    fontWeight: '400',
    wordWrap: 'break-word',
    borderRadius: 30,
  },
  listItem: {
    minHeight: 48,
    px: 2.5,
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'customGreen.100',
    },
    transition: 'background-color 0.3s',
  },

  listText: {
    fontSize: '18px',
    fontStyle: 'normal',
  },
  listChildText: {
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    color: 'grey.500',
  },
};
