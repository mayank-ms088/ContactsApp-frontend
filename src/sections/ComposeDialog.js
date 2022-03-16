import React from "react";
// import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { LoadingButton } from "@mui/lab";

function ComposeDialog({ handleDialogClose, handleSend, ...rest }) {
  const [open, setOpen] = React.useState(true);
  const [OTP, setOTP] = React.useState(
    Math.floor(100000 + Math.random() * 900000)
  );
  const text = "Hi. Your OTP is: " + OTP;
  const dispatch = useDispatch();

  return (
    <Dialog
      open={open}
      fullWidth={true}
      maxWidth={"sm"}
      onClose={() => handleDialogClose("cancel")}
      keepMounted
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <Typography
          component="span"
          variant="h4"
          //   className={classes.inline}
          color="textPrimary"
        >
          {"Compose"}
        </Typography>
      </DialogTitle>
      <DialogContent dividers={true}>
        <Typography variant="body1" style={{ marginBottom: 13 }}>
          Hi. Your OTP is:
        </Typography>
        <TextField fullWidth label="OTP" value={OTP} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDialogClose("cancel")} color="primary">
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            handleSend(text, OTP);
          }}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ComposeDialog.propTypes = {
  className: PropTypes.string,
};

export default ComposeDialog;
