import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = true;
  return;
  <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
