import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuthStore } from '../store';
import logoutMiddleware from '../modules/auth/auth.middleware';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = useAuthStore.getState().token;
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const client = new ApolloClient({
  link: from([authLink, logoutMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
