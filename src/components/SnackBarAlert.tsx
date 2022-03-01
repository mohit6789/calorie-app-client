import React, { FC } from "react";
import {
  Alert,
  AlertProps,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";

type Props = {
  open: boolean;
  close?: (reason?: SnackbarCloseReason) => void;
};

const SnackBarAlert: FC<Props & AlertProps> = ({
  open,
  close,
  children,
  ...rest
}) => {
  let closeHandler = (
    event: React.SyntheticEvent<any> | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (close) {
      close(reason);
    }
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      autoHideDuration={3000}
      onClose={closeHandler}
    >
      <Alert onClose={closeHandler} severity="success" {...rest}>
        {children}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarAlert;