// ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  if (!isAuthenticated || (allowedRoles && !allowedRoles.includes(userRole))) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;