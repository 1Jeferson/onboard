import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './app/modules/auth/';
import authRoutes from './app/modules/auth/auth.routes';

function App() {
  return (
    <Routes>
      <Route path={authRoutes.login} element={<LoginPage />} />
    </Routes>
  );
}

export default App;
