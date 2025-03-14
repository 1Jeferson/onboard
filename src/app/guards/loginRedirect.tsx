import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store';
import { authRoutes } from '../modules/auth';
import { kanbanRoutes } from '../modules/home';

const LoginRedirect = () => {
  const { token } = useAuthStore();

  if (token) {
    return <Navigate to={kanbanRoutes.home} replace />;
  }

  return <Navigate to={authRoutes.login} replace />;
};

export default LoginRedirect;
