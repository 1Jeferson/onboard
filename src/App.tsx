import client from './app/data/client';
import { ApolloProvider } from '@apollo/client';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout, LoginPage, authRoutes } from './app/modules/auth';
import { HomePage, kanbanRoutes } from './app/modules/home';
import RegisterPage from './app/modules/auth/register.page';

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path='/' element={<Navigate to={authRoutes.login} />} />

        <Route element={<Layout />}>
          <Route path={authRoutes.login} element={<LoginPage />} />
          <Route path={authRoutes.register} element={<RegisterPage />} />
        </Route>
        <Route path={kanbanRoutes.home} element={<HomePage />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
