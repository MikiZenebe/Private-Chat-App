import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  //Create Protected page
  const { user } = useContext(AuthContext);

  //if the user is online stay... else back to login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
