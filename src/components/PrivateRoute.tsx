import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { USER_KEY } from "../contants";
import storageService from "../services/storage.service";

type Props = {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const user = storageService.getItem(USER_KEY);
  const isAuthenticate = !!user;
  return isAuthenticate ? children : <Navigate to="/unauthorised" />;
}
export default PrivateRoute;
