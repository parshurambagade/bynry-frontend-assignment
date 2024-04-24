import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('authUser') !== null;  // Or however authentication is determined

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <> 
      <Component />
      {/* <Outlet /> Render child routes */}
    </>
  );
};

export default ProtectedRoute;
