import React, { useState, Fragment } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { style } from './sideBar.style';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import UserProfiePic from '../../../assets/Images/user_profile.png';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { BoxComponent, TypographyComponent, BaseIconButton, BaseDrawer } from '../../UILib';
import { ExpandLess, Search, ExpandMore } from '@mui/icons-material';
import sidebarContent, { SidebarItem } from './SidebarContent';
import { useNavigate } from 'react-router-dom';
import { drawerWidth } from '../../../constants/SideBar';

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(6, 1.5),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(BaseDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const DrawerContent = styled('div')(({ theme }) => ({
  overflowY: 'auto',
  overflowX: 'hidden',
  height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
  padding: theme.spacing(0, 1.5),
  // Custom scrollbar styles
}));

interface SideBarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBar({ open, setOpen }: SideBarProps) {
  // const theme = useTheme();
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<any>({});

  const handleDrawer = () => {
    setOpen(!open);
    if (open) {
      setExpandedItems({});
    }
  };

  const handleToggle = (item: SidebarItem) => {
    setExpandedItems((prevExpandedItems: any) => ({
      ...prevExpandedItems,
      [item.name]: !prevExpandedItems[item.name],
    }));
  };

  const onRedirect = (path: string) => {
    navigate(path);
  };
  console.log('--------expandedItems-', expandedItems);

  return (
    <BoxComponent sx={{ display: 'flex', position: 'relative' }}>
      <BaseIconButton
        sx={{
          ...style.openArrow,
          transition: 'margin-left 0.9s ease',
          left: open ? drawerWidth - 5 : 70,
        }}
        className="testing"
        onClick={handleDrawer}
      >
        {!open ? (
          <>
            <ChevronRightIcon sx={{ color: 'white.100', ...style.icon }} />
            <ChevronRightIcon sx={{ color: 'grey.400', ...style.icon }} />
          </>
        ) : (
          <>
            <ChevronLeftIcon sx={{ color: 'grey.400', ...style.icon }} />
            <ChevronLeftIcon sx={{ color: 'white.100', ...style.icon }} />
          </>
        )}
      </BaseIconButton>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ ...(!open && { alignItems: 'center' }) }}>
          <BoxComponent sx={style.AIOIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={open ? '134' : '60'}
              height={open ? '64' : '30'}
              viewBox="0 0 134 64"
              fill="none"
            >
              <path
                d="M64.7672 16.5796V40.6067C64.7672 45.0378 67.8943 48.6221 71.7562 48.6221H74.0076V24.595C74.0076 20.1639 70.8802 16.5796 67.0183 16.5796H64.7672Z"
                fill="#242528"
              />
              <path
                d="M129.554 20.6341C125.711 16.9557 120.605 16.5229 117.092 16.5229H99.2612C95.2862 16.5229 90.2468 17.0027 86.479 20.747C84.6894 22.5156 83.4649 24.764 82.8431 27.4265C82.4664 29.0352 82.2874 30.8319 82.2874 33.0805V33.0993C82.2874 33.1463 82.2874 38.2077 82.3157 48.6031C82.3157 48.6031 83.4553 48.6031 84.5669 48.6031C90.3221 48.6031 91.5278 45 91.5278 40.823C91.5278 35.6769 91.5184 33.0899 91.5184 33.0899C91.5184 27.4171 92.856 25.7425 99.2706 25.7425H117.101C123.055 25.7425 124.788 27.4171 124.788 33.0899V46.1759C124.788 50.4188 121.35 53.8526 117.101 53.8526H70.5508C63.8442 53.8526 60.6134 49.7133 58.6635 46.9191L42.1041 20.4742C40.503 17.8682 38.5625 15.9961 34.4838 15.9961C30.4053 15.9961 28.3989 17.8682 26.7976 20.4742L-0.000549316 63.0722H4.93519C10.7187 63.0722 12.612 60.438 15.4755 55.7906C17.6043 52.4039 34.4463 25.6295 34.4463 25.6295L50.2144 50.8139C55.9602 59.4032 62.0169 63.0628 70.3624 63.0628H117.083C126.408 63.0628 133.999 55.4801 133.999 46.1665V33.0805C133.999 29.562 133.538 24.4443 129.545 20.6247L129.554 20.6341Z"
                fill="#242528"
              />
              <path
                d="M69.0067 12.6753C65.6157 12.6753 62.8652 9.91889 62.8652 6.54154C62.8652 3.16416 65.6251 0.407715 69.0067 0.407715C72.3882 0.407715 75.1481 3.16416 75.1481 6.54154C75.1481 9.91889 72.3882 12.6753 69.0067 12.6753ZM69.0067 3.4464C67.3018 3.4464 65.9077 4.82932 65.9077 6.54154C65.9077 8.25373 67.2922 9.63666 69.0067 9.63666C70.7209 9.63666 72.1057 8.25373 72.1057 6.54154C72.1057 4.82932 70.7209 3.4464 69.0067 3.4464Z"
                fill="#242528"
              />
            </svg>
          </BoxComponent>

          <BoxComponent sx={{ ...style.userProfile }}>
            <BoxComponent sx={{ display: 'flex', gap: 1 }}>
              <BoxComponent>
                <Avatar sx={style.userAvatar} src={UserProfiePic} />
              </BoxComponent>
              <BoxComponent>
                {open && <TypographyComponent sx={style.userTitle}>John Doe</TypographyComponent>}
              </BoxComponent>
            </BoxComponent>
            {open && (
              <BoxComponent>
                <NotificationsOutlinedIcon />
              </BoxComponent>
            )}
          </BoxComponent>
          <BoxComponent>
            {open ? (
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Type to search..."
                sx={style.search}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            ) : (
              <BaseIconButton onClick={() => setOpen(true)}>
                <Search />
              </BaseIconButton>
            )}
          </BoxComponent>
        </DrawerHeader>

        <DrawerContent>
          <List>
            {sidebarContent.map((item, index) => (
              <Fragment key={index}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{ ...style.listItem, justifyContent: open ? 'initial' : 'center' }}
                    onClick={() => (item.children && open ? handleToggle(item) : onRedirect(item.path))}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 1 : 'auto',
                        justifyContent: 'center',
                        ...style.listText,
                        color: expandedItems[item.name] ? 'grey.700' : 'grey.500',
                        fontWeight: expandedItems[item.name] ? 600 : 400,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        component: 'span',
                        sx: {
                          ...style.listText,
                          color: expandedItems[item.name] ? 'grey.700' : 'grey.500',
                          fontWeight: expandedItems[item.name] ? 600 : 400,
                        },
                      }}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                    {item.children && open && (expandedItems[item.name] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                </ListItem>
                {item.children && (
                  <Collapse in={expandedItems[item.name]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={style.childList}>
                      {item.children.map((child, childIndex) => (
                        <ListItem key={childIndex} disablePadding sx={{ display: 'block' }}>
                          <ListItemButton
                            sx={{ ...style.listItem, justifyContent: open ? 'initial' : 'center' }}
                            onClick={() => onRedirect(child.path)}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 1 : 'auto',
                                justifyContent: 'center',
                                ...style.listChildText,
                              }}
                            >
                              {child.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={child.name}
                              primaryTypographyProps={{
                                component: 'span',
                                sx: {
                                  ...style.listChildText,
                                },
                              }}
                              sx={{ opacity: open ? 1 : 0 }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            ))}
          </List>
        </DrawerContent>
      </Drawer>
    </BoxComponent>
  );
}
