import SampleFormContainer from '../../containers/SampleForm';
import { useBreadcrumbs } from '../../contexts/Breadcrumbs';

export default function SampleForm() {
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
  return <SampleFormContainer />;
}
