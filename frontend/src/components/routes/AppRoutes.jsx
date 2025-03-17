import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../../pages/dashboard/DashboardPage';
import LoginPage from '../../pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import DashboardHome from '../../pages/dashboard/DashboradHome';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={'/login'} replace />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/users" element={<DashboardPage />} />
        </Route>
      </Route>

      {/* Ruta por defecto en caso de URL inválida */}
      <Route path="*" element={<Navigate to={'/login'} replace />} />
    </Routes>
  );
};
