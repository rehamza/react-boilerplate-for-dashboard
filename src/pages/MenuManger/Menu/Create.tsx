import MenuCreateContainer from '../../../containers/MenuManager/Menu/Create';
import { useBreadcrumbs } from '../../../contexts/Breadcrumbs';

export default function MenuCreate() {
  useBreadcrumbs({
    title: 'Untitled',
    breadcrumbs: [
      {
        title: 'Home',
        path: '/home',
      },
      {
        title: 'Menu Manager',
        path: '/menu-manager/menus',
      },
      {
        title: 'Menu',
        path: '',
      },
    ],
  });
  return <MenuCreateContainer />;
}
