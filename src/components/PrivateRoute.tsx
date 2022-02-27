import React, { FC } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const isAuthenticate = true; // isauth() returns true or false based on localStorage
  return isAuthenticate ? children : <Navigate to="/unauthorised" />;
}
export default PrivateRoute;
