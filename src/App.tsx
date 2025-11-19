import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from '@components/routes/ProtectedRoute';
const LoaderSpinner = lazy(() => import('@components/LoaderSpinner'));
const Home = lazy(() => import('@pages/Home'));
const Login = lazy(() => import('@pages/Login'));
const Users = lazy(() => import('@pages/Users'));
const InformationApi = lazy(() => import('@pages/InformationApi'));
const PrivateLayout = lazy(() => import('@layouts/PrivateLayout'));
const App = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner />} />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Information" element={<InformationApi />} />
            <Route path="/Users" element={<Users />} />
          </Route>
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
