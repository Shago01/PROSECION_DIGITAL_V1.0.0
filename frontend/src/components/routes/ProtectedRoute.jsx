import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  console.log('Estado de autenticación:', isAuth);

  return isAuth ? children : <Navigate to="/login" replace />;
}
