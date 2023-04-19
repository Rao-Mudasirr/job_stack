import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAuths = () => {
  const isToken = localStorage.getItem("token");

  return !isToken ? <Outlet /> : <Navigate to={"/"} />;
};
