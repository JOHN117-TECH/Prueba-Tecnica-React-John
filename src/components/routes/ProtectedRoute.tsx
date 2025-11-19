import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoaderSpinner from '@components/LoaderSpinner';

export default function ProtectedRoute() {
  const isAuth = localStorage.getItem('auth') === 'true';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isAuth) return <Navigate to="/login" replace />;

  if (loading) return <LoaderSpinner />;

  return <Outlet />;
}
