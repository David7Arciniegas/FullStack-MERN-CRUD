import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
