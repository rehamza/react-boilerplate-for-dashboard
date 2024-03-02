import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import { RouteObject } from './index';
import routes from './index';
import Layout from '../components/Layout';
import Loader from '../components/Shared/Loader';
const processRoutes = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route: RouteObject) => {
    const { element, requiredRole, children, isSideBar } = route;
    const protectedElement = requiredRole ? (
      <ProtectedRoute requiredRole={requiredRole}>{isSideBar ? <Layout>{element}</Layout> : element}</ProtectedRoute>
    ) : (
      element
    );
    return {
      ...route,
      element: <Suspense fallback={<Loader maxWidth={'10rem'} />}>{protectedElement}</Suspense>,
      children: children ? processRoutes(children) : undefined,
    };
  });
};

export const AppRoute = createBrowserRouter(processRoutes(routes));
