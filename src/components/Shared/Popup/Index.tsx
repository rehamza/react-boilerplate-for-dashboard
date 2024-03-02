import { Menu, MenuItem } from '@mui/material';
interface Actions {
  name: any;
  action: (data: any) => void;
}
interface PopUpProps {
  anchorEl: any;
  selectedIndex: any;
  handleMenuClose: any; // TODO: hamza tariq add function type and remove optional function from list
  actions: Actions[];
  index: any;
  data: any;
}

export default function PopUp({ anchorEl, selectedIndex, handleMenuClose, actions, index, data }: PopUpProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl) && selectedIndex === index}
      onClose={handleMenuClose}
      PaperProps={{ style: { width: 130 } }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      {actions.map((menuItem, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            menuItem.action(data);
            handleMenuClose();
          }}
        >
          {menuItem.name}
        </MenuItem>
      ))}
    </Menu>
  );
}
