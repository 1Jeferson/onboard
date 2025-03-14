import client from './app/data/client';
import { ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import { Layout, LoginPage, RegisterPage, authRoutes } from './app/modules/auth';
import { HomePage, kanbanRoutes } from './app/modules/home';
import { AuthGuard, LoginRedirect } from './app/guards';

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path='/' element={<LoginRedirect />} />

        <Route element={<Layout />}>
          <Route path={authRoutes.login} element={<LoginPage />} />
          <Route path={authRoutes.register} element={<RegisterPage />} />
        </Route>

        <Route element={<AuthGuard />}>
          <Route path={kanbanRoutes.home} element={<HomePage />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
