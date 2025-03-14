import { useAuthStore, useUserStore } from '@/app/store';
import { ServerError } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import authRoutes from './auth.routes';

export const logout = () => {
  localStorage.removeItem('user-storage');
  localStorage.removeItem('auth-storage');

  useAuthStore.getState().removeToken();
  useUserStore.getState().resetUser();

  location.href = authRoutes.login;
};

const logoutMiddleware = onError(({ graphQLErrors, networkError }) => {
  const token = useAuthStore.getState().token;

  if (!token) {
    logout();
    return;
  }

  if (graphQLErrors) {
    graphQLErrors.forEach((error) => {
      if (error.extensions?.code === 401) {
        logout();
      }
    });
  }

  if (networkError) {
    if ((networkError as ServerError).statusCode === 401) {
      logout();
    }
  }
});

export default logoutMiddleware;
