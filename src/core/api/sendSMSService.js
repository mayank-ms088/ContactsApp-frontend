import axios from "axios";
import { SEND_SMS } from "src/config";
class SendSMSService {
  send = (mobile, text) =>
    new Promise((resolve, reject) => {
      axios
        .post(SEND_SMS, { mobile: mobile, text: text })
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        });
    });
}

const sendSMSService = new SendSMSService();

export default sendSMSService;
