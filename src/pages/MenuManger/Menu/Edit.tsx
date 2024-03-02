import MenuEditContainer from '../../../containers/MenuManager/Menu/Edit';
import { useBreadcrumbs } from '../../../contexts/Breadcrumbs';

export default function MenuEdit() {
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
  return <MenuEditContainer />;
}
