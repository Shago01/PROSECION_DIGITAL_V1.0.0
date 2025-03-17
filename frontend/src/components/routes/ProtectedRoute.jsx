import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
