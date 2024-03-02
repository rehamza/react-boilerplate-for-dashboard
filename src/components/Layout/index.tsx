import { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './SideBar/Sidebar';
import { BoxComponent } from '../UILib';
// import { useTheme } from '@mui/material/styles';
import { drawerWidth } from '../../constants/SideBar';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BoxComponent>
        <BoxComponent
          sx={{
            flexGrow: 1,
            transition: 'margin-left 0.3s ease',
            marginLeft: open ? `${drawerWidth}px` : `${70}px`,
          }}
        >
          <Topbar />
        </BoxComponent>
        <Sidebar open={open} setOpen={setOpen} />
        <BoxComponent
          component="main"
          sx={{
            flexGrow: 1,
            px: { md: '70px', xs: '0px' },
            py: '30px',
            transition: 'margin-left 0.3s ease',
            marginLeft: open ? `${drawerWidth}px` : `${70}px`,
            marginRight: { md: 0, xs: 2 },
          }}
        >
          {children}
        </BoxComponent>
      </BoxComponent>
    </>
  );
}
