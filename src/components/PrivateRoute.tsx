import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { getLoggedinUser } from "../utils/user-utils";

type Props = {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const isAuthenticate = !!getLoggedinUser();
  return isAuthenticate ? children : <Navigate to="/unauthorised" />;
}
export default PrivateRoute;
