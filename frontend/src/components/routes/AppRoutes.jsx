import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../../pages/dashboard/DashboardPage';
import DashboardHome from '../../pages/dashboard/DashboradHome';
import AdminNazreno from '../../pages/dashboard/nazarenos/AdminNazareno';
import { RegisterNazareno } from '../../pages/dashboard/nazarenos/RegisterNazareno';
import TableNazareno from '../../pages/dashboard/nazarenos/TableNazareno';
import LoginPage from '../../pages/LoginPage';
import { ProtectedRoute } from './ProtectedRoute';
import RegisterUser from '../../pages/dashboard/user/RegisterUser';
import TableUser from '../../pages/dashboard/user/TableUser';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={'/login'} replace />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="user">
            <Route path="table" element={<TableUser />} />
            <Route path="register" element={<RegisterUser />} />
            <Route path="administracion" />
          </Route>
          <Route />
          <Route path="naz">
            <Route path="table" element={<TableNazareno />} />
            <Route path="register" element={<RegisterNazareno />} />
            <Route path="administracion" element={<AdminNazreno />} />
          </Route>
        </Route>
      </Route>

      {/* Ruta por defecto en caso de URL inválida */}
      <Route path="*" element={<Navigate to={'/login'} replace />} />
    </Routes>
  );
};
