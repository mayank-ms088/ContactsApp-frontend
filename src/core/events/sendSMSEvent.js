export const SEND_OTP = "@sendSMS/send";

export function send(log) {
  return {
    type: SEND_OTP,
    payload: {
      log: log,
    },
  };
}
