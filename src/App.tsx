import client from './app/data/client';
import { ApolloProvider } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';
import { Layout, LoginPage, RegisterPage, authRoutes } from './app/modules/auth';
import { HomeLayout, HomePage, kanbanRoutes } from './app/modules/home';
import { AuthGuard, LoginRedirect } from './app/guards';
import { BoardPage } from './app/modules/board';
import { Toaster } from './components/ui/sonner';

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
          <Route element={<HomeLayout />}>
            <Route path={kanbanRoutes.home} element={<HomePage />} />
            <Route path={kanbanRoutes.board} element={<BoardPage />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </ApolloProvider>
  );
}

export default App;
