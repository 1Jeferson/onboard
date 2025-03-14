import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store';
import { authRoutes } from '../modules/auth';
import { kanbanRoutes } from '../modules/home';

const AuthGuard = () => {
  const { token } = useAuthStore();
  const location = useLocation();

  if (location.pathname === '/' && token) {
    return <Navigate to={kanbanRoutes.home} replace />;
  }

  if (location.pathname === '/' && !token) {
    return <Navigate to={authRoutes.login} replace />;
  }

  if (token) {
    return <Outlet />;
  }

  return <Navigate to={authRoutes.login} />;
};

export default AuthGuard;
