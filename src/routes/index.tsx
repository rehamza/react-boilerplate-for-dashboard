import { ReactElement, lazy } from "react";
import { Navigate } from "react-router-dom";
import routesPath from "../configs/routesPath";
import Role from "../configs/role";

const Home = lazy(() => import("../pages/Home"));
const Menus = lazy(() => import("../pages/MenuManger/Menu"));
const MenuCreate = lazy(() => import("../pages/MenuManger/Menu/Create"));
const MenuEdit = lazy(() => import("../pages/MenuManger/Menu/Edit"));
const Login = lazy(() => import("../pages/Login"));
const Marketing = lazy(() => import("../pages/Marketing"));
const SampleForm = lazy(() => import("../pages/SampleForm"));

export interface RouteObject {
  path: string;
  element: ReactElement;
  requiredRole?: string[];
  children?: RouteObject[];
  isSideBar?: boolean;
}

const routes: RouteObject[] = [
  //simple routes with protection
  {
    path: routesPath.login,
    element: <Login />,
  },

  // protected route
  {
    path: "/",
    element: <Navigate to={routesPath.home} replace />,
    requiredRole: [Role.Owner, Role.Admin],
    isSideBar: true,
  },
  {
    path: routesPath.home,
    element: <Home />,
    requiredRole: [Role.Owner, Role.Admin],
    isSideBar: true,
  },

  /* Menu Manager section */

  /* menus routes */
  {
    path: routesPath.menuManager.menu.menus,
    element: <Menus />,
    requiredRole: [Role.Owner, Role.Admin],
    isSideBar: true,
  },
  {
    path: routesPath.menuManager.menu.create,
    element: <MenuCreate />,
    requiredRole: [Role.Owner, Role.Admin],
  },
  {
    path: routesPath.menuManager.menu.edit,
    element: <MenuEdit />,
    requiredRole: [Role.Owner, Role.Admin],
  },

  /* Marketing Section */
  {
    path: routesPath.marketing,
    element: <Marketing />,
    requiredRole: [Role.Owner, Role.Admin],
    isSideBar: true,
  },

  /* Sample form */

  {
    path: routesPath.sampleForm,
    element: <SampleForm />,
    requiredRole: [Role.Owner, Role.Admin],
  },
];

export default routes;
