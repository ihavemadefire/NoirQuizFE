import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, element }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return element;
}

export default ProtectedRoute;