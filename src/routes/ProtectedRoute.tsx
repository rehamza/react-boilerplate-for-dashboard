import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/User';
import { isVerifyUser } from '../utils/User/role';
import Loader from '../components/Shared/Loader';

interface ProtectedRouteProps {
  readonly children: JSX.Element;
  readonly requiredRole?: string[];
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isloading } = useUser();

  if (isloading) {
    return <Loader maxWidth={'10rem'} />;
  }

  const isVerify = isVerifyUser(user?.role, requiredRole);
  if (!isVerify) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
