import React, { FC } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
}

const AdminRoute: FC<Props> = ({ children }) => {
  const isAdmin = true; // isauth() returns true or false based on localStorage
  return isAdmin ? children : <Navigate to="/unauthorised" />;
}
export default AdminRoute;
