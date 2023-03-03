import { combineReducers } from "redux";

import loginReducer from "./auth/signin/reducer";

const rootReducer = combineReducers({
    loginReducer
});
export default rootReducer;