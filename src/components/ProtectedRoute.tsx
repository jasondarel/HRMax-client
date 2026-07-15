import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export function ProtectedRoute({ allowedRole }: { allowedRole?: string }) {
  const userStr = Cookies.get('user');
  const user = userStr ? JSON.parse(userStr) : null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
