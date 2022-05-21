import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

const Notifications = (props) => {
  const { notify, setNotify } = props;
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={2000}
      onClose={() => setNotify({ isOpen: false }) && handleClose()}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={notify.type} variant="filled">
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default Notifications;
