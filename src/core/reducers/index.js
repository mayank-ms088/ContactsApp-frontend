import { combineReducers } from "redux";
//core

import sendSMSReducer from "./sendSMSReducer";
const rootReducer = combineReducers({
  //account: accountReducer
  sendSMS: sendSMSReducer,
});

export default rootReducer;
