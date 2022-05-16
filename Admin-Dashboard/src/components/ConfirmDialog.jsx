import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

const ConfirmDialog = (props) => {
  const { confirmDialog, setConfirmDialog } = props;

  return (
    <Dialog open={confirmDialog.isOpen}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogTitle
          style={{
            maxWidth: "200px",
            maxHeight: "200px",
          }}
        >
          <img
            src="https://media.istockphoto.com/vectors/relationship-breakup-divorce-vector-id1317803258?b=1&k=20&m=1317803258&s=612x612&w=0&h=TzqIo2EzqjrwBopfM2giajnV5G72LauQlmBA2eIdYZI="
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </DialogTitle>
      </div>
      <DialogContent>
        <Typography
          variant="h6"
          style={{ fontWeight: "200", fontFamily: "Monospace" }}
        >
          {confirmDialog.title}
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ fontWeight: "200", fontFamily: "Monospace" }}
        >
          {confirmDialog.subTitle}
        </Typography>
      </DialogContent>
      <DialogActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <Button
          variant="contained"
          color="error"
          style={{ width: "150px" }}
          onClick={confirmDialog.onConfirm}
        >
          Confirm
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{ width: "150px" }}
          onClick={() => setConfirmDialog({ ...ConfirmDialog, isOpen: false })}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
