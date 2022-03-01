import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { isAdmin } from "../utils/user-utils";

type Props = {
  children: JSX.Element;
}

const AdminRoute: FC<Props> = ({ children }) => {
  const isAdminUser = isAdmin();
  return isAdminUser ? children : <Navigate to="/unauthorised" />;
}
export default AdminRoute;
