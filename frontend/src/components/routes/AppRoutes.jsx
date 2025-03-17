import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../../pages/DashboardPage';
import LoginPage from '../../pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Ruta por defecto en caso de URL inválida */}
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
