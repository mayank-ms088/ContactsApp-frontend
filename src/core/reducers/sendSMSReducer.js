import produce from "immer";

const { SEND_OTP } = require("../events/sendSMSEvent");
const initialState = {
  logs: [],
};
const sendSMSReducer = (state = initialState, action) => {
  if (action.type === SEND_OTP) {
    return produce(state, (draft) => {
      if (!draft.logs || !draft.logs.length) {
        draft.logs = [{ id: 0, ...action.payload.log }];
      } else {
        draft.logs.push({ id: draft.logs.length, ...action.payload.log });
      }
    });
  } else {
    return state;
  }
};
export default sendSMSReducer;
