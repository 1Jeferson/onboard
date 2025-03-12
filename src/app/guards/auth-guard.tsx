import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store';
import { authRoutes } from '../modules/auth';

const AuthGuard = () => {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to={authRoutes.login} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
