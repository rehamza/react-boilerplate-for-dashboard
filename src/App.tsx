import { QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ThemeRegistry from './theme/ThemeRegistry';
import { AuthProvider } from './contexts/User';
import { BreadcrumbProvider } from './contexts/Breadcrumbs';
import { AppRoute } from './routes/router';
import { RouterProvider } from 'react-router-dom';
// import { environment } from './configs/environments/environment';
import queryClient from './configs/reactQuery';
import './style.css';
function App() {
  return (
    <ThemeRegistry>
      <QueryClientProvider client={queryClient}>
        {/* {environment.production === false && <ReactQueryDevtools initialIsOpen={false} />} */}
        <AuthProvider>
          <BreadcrumbProvider>
            <RouterProvider router={AppRoute} />
          </BreadcrumbProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeRegistry>
  );
}

export default App;
