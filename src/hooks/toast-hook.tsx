import { SnackbarCloseReason } from "@mui/material";
import { useState } from "react";

const useToast = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const hideToast = (
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage("");
    setOpen(false);
  };
  const showToast = (message: string = "") => {
    setMessage(message);
    setOpen(true);
  };

  return {
    showToast,
    hideToast,
    isOpen: open,
    message: message,
  };
};

export default useToast;
