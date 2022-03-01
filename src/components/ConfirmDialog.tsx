import React, { FC } from "react";
import { Button, Dialog, Stack } from "@mui/material";
import { Box } from "@mui/material";

type Props = {
  message: string;
  isOpen: boolean;
  cancel: () => void;
  confirm: () => void;
};

const ConfirmDialog: FC<Props> = ({ message, isOpen, cancel, confirm }) => {
  return (
    <Dialog open={isOpen}>
      <Box my={3} mx={3}>
        {message}

        <Stack direction="row" spacing={2} mt={4} justifyContent="end">
          <Button variant="outlined" onClick={cancel}>
            No
          </Button>
          <Button variant="contained" onClick={confirm}>
            Yes
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ConfirmDialog;
