import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, Layout, authRoutes } from './app/modules/auth';
import { ApolloProvider } from '@apollo/client';
import client from './app/data/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path='/' element={<Navigate to={authRoutes.login} />} />

        <Route element={<Layout />}>
          <Route path={authRoutes.login} element={<LoginPage />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
