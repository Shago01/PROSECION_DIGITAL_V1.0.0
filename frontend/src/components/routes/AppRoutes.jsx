import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../../pages/dashboard/DashboardPage';
import LoginPage from '../../pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import DashboardHome from '../../pages/dashboard/DashboradHome';
import TableNazareno from '../../pages/dashboard/nazarenos/TableNazareno';
import { FormNazareno } from '../../pages/dashboard/nazarenos/FormNazareno';
import AdminNazreno from '../../pages/dashboard/nazarenos/AdminNazareno';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={'/login'} replace />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="users">
            <Route path="table" />
            <Route path="register" />
            <Route path="administracion" />
          </Route>
          <Route />
          <Route path="naz">
            <Route path="table" element={<TableNazareno />} />
            <Route path="register" element={<FormNazareno />} />
            <Route path="administracion" element={<AdminNazreno />} />
          </Route>
        </Route>
      </Route>

      {/* Ruta por defecto en caso de URL inválida */}
      <Route path="*" element={<Navigate to={'/login'} replace />} />
    </Routes>
  );
};
