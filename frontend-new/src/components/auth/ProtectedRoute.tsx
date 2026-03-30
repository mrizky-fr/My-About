import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { hasAuthSession } from '../../lib/auth';

const ProtectedRoute = () => {
  const location = useLocation();

  if (!hasAuthSession()) {
    const destination = `${location.pathname}${location.search}${location.hash}`;

    return <Navigate to="/login" replace state={{ from: destination }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
