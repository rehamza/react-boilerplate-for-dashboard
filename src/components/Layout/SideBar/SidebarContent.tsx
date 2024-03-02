import { ReactElement } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import GroupWorkOutlinedIcon from '@mui/icons-material/GroupWorkOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import Role from '../../../configs/role';
import routesPath from '../../../configs/routesPath';

export interface SidebarItem {
  name: string;
  path: string;
  icon: ReactElement;
  requiredRole: string[];
  children?: SidebarItem[];
}

const sidebarContent: SidebarItem[] = [
  {
    name: 'Home',
    path: routesPath.home,
    icon: <HomeOutlinedIcon />,
    requiredRole: [Role.Admin, Role.Owner],
  },
  {
    name: 'Menu Manager',
    path: routesPath.menuManager.menu.menus,
    icon: <WidgetsOutlinedIcon />,
    requiredRole: [Role.Admin, Role.Owner],
    children: [
      {
        name: 'Menus',
        path: routesPath.menuManager.menu.menus,
        icon: <MenuBookOutlinedIcon />,
        requiredRole: [Role.Admin, Role.Owner],
      },
      {
        name: 'Categories',
        path: routesPath.menuManager.category.categories,
        icon: <CategoryOutlinedIcon />,
        requiredRole: [Role.Admin, Role.Owner],
      },
      {
        name: 'Items',
        path: routesPath.menuManager.item.items,
        icon: <FastfoodOutlinedIcon />,
        requiredRole: [Role.Admin, Role.Owner],
      },
      {
        name: 'Modifier Groups',
        path: routesPath.menuManager.modifierGroup.modifierGroups,
        icon: <GroupWorkOutlinedIcon />,
        requiredRole: [Role.Admin, Role.Owner],
      },
      {
        name: 'Modifier',
        path: routesPath.menuManager.modifier.modifiers,
        icon: <TuneOutlinedIcon />,
        requiredRole: [Role.Admin, Role.Owner],
      },
      {
        name: 'Modifier Options',
        path: routesPath.menuManager.modifierOption.modifierOptions,
        icon: <TuneOutlinedIcon />,
        requiredRole: [Role.Admin, Role.Owner],
      },
      {
        name: 'Tags & Allergens',
        path: routesPath.menuManager.tagsAllergen.tagsAllergens,
        icon: <TuneOutlinedIcon />,
        requiredRole: [Role.Admin, Role.Owner],
      },
    ],
  },

  {
    name: 'Marketing',
    path: routesPath.marketing,
    icon: <LocalOfferOutlinedIcon />,
    requiredRole: [Role.Admin, Role.Owner],
  },
  {
    name: 'Website',
    path: routesPath.websiteBuilder.website.index,
    icon: <LanguageIcon />,
    requiredRole: [Role.Admin, Role.Owner],
  },
  {
    name: 'Bulk Manager',
    path: '/bulk-manager',
    icon: <LayersOutlinedIcon />,
    requiredRole: [Role.Admin, Role.Owner],
  },
  {
    name: 'Review Manager',
    path: '/review-manager',
    icon: <RateReviewOutlinedIcon />,
    requiredRole: [Role.Admin, Role.Owner],
  },
];

export default sidebarContent;
