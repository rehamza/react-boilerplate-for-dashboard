import { useBreadcrumbs } from '../../contexts/Breadcrumbs';

export default function Home() {
  useBreadcrumbs({
    title: 'Home',
    breadcrumbs: [
      {
        title: 'Home',
        path: '/home',
      },
    ],
  });

  return <div style={{ background: '#fff' }}>Home</div>;
}
