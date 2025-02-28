import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, Layout, authRoutes } from './app/modules/auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={authRoutes.login} />} />

      <Route element={<Layout />}>
        <Route path={authRoutes.login} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
