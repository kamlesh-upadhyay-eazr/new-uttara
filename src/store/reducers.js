import { combineReducers } from "redux";

import loginReducer from "./auth/signin/reducer";
import GuestInputs from "./guestCounter/reducer";
import ticketReducer from "./ticketReducer/reducer";
const rootReducer = combineReducers({
    loginReducer,
    GuestInputs,
    ticketReducer
});
export default rootReducer;