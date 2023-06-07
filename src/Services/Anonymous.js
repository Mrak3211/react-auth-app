import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Anonymous = () => {
  const item = JSON.parse(localStorage.getItem("loggedin"));
  const token = item === true;
  console.log(token);

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default Anonymous;
