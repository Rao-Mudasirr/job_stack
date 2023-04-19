import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const isToken = localStorage.getItem("token");

  return isToken ? <Outlet /> : <Navigate to={"login"} />;
};
