import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// material
import {
  Alert,
  CircularProgress,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ComposeDialog from "./ComposeDialog";
import { useDispatch, useSelector } from "react-redux";
import { sendSMS } from "src/core/repo/sendSMSRepo";
// component

// ----------------------------------------------------------------------

export default function ContactDetails({ contact }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDialogClose = (status) => {
    setOpen(false);
    setStatus(
      status === "cancel" ? null : status === "success" ? "success" : "error"
    );
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setStatus(null);
  };
  const handleSend = async (text, OTP) => {
    try {
      setLoading(true);
      setOpen(false);
      const res = await dispatch(sendSMS({ ...contact[0] }, text, OTP));
      handleDialogClose(res.toLowerCase());
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };
  return (
    <Stack spacing={3}>
      <Stack direction={{ xs: "column", sm: "column" }} spacing={2}>
        <TextField fullWidth label="Full Name" value={contact[0].name} />
        <TextField fullWidth label="Mobile" value={contact[0].mobile} />
        <TextField fullWidth label="Company" value={contact[0].company} />
      </Stack>
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
        // loading={isSubmitting}
      >
        Send Message
      </LoadingButton>
      {open && (
        <ComposeDialog
          handleDialogClose={handleDialogClose}
          handleSend={handleSend}
        />
      )}
      {status && (
        <Snackbar
          open={Boolean(status)}
          autoHideDuration={3000}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={status || "success"}
            sx={{ width: "100%" }}
          >
            {status === "success" ? "OTP Sent!" : "Sent Request Failed"}
          </Alert>
        </Snackbar>
      )}
      {loading && (
        <CircularProgress
          style={{
            position: "fixed",
            alignContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </Stack>
  );
}
