import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const AdminRoute = ({ element: Component, ...rest }) => {

  const [state] = useContext(UserContext)

  return state.user.status === 'admin' ? <Outlet /> : <Navigate to="/profile" />;
};

export default AdminRoute;