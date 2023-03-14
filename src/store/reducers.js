import { combineReducers } from "redux";
import loginReducer from "./auth/signin/reducer";
import GuestInputs from "./guestCounter/reducer";
import userReducer from "./users/userReducer";
import event from "./activity/reducer";
const rootReducer = combineReducers({
    loginReducer,
    GuestInputs,
    userReducer,
    event
});
export default rootReducer;