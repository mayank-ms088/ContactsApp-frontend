import sendSMSService from "../api/sendSMSService";
import { send } from "../events/sendSMSEvent";
export function sendSMS(contact, text, otp) {
  return async (dispatch) => {
    try {
      const res = await sendSMSService.send(contact.mobile, text);
      dispatch(send({ contact: contact, otp: otp, ...res.data }));
      return res.data.status;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}
