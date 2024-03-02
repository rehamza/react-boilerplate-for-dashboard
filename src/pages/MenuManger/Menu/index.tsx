import { useBreadcrumbs } from '../../../contexts/Breadcrumbs';
import MenuContainer from '../../../containers/MenuManager/Menu/index';

export default function Menus() {
  useBreadcrumbs({
    title: 'Menus',
    breadcrumbs: [
      {
        title: 'Home',
        path: '/home',
      },
      {
        title: 'Menu Manager',
        path: '/menu-manager/menus',
      },
    ],
  });

  return (
    <>
      <MenuContainer />
    </>
  );
}
