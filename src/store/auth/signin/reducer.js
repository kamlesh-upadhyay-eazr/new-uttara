// import { isEmpty } from "../../../validations/isEmpty";
import {
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMINS_FAILED,
  LOGIN_ADMIN_SUCCESSFUL,
  LOGIN_ADMIN_FAILED,
  OTP_SENT,
  OTP_SENT_FAILED,
  TC_OTP_SENT,
  TC_OTP_SENT_FAILED,
  SET_CONTACT_NUMBER,
  LOGIN_ADMIN_LOADING,
  LOGOUT,
  SET_CURRENT_ADMIN,
  GET_CURRENT_ADMIN_SUCCESS,
  GET_CURRENT_ADMIN_FAILED,
} from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  loading: false,
  contactNumber: "",
  admin: null,
  currentAdmin: [],
  error: null,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ADMIN_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        // verifyLoading: false,
        // showOtpModal: false,
        isAuthenticated: true,
        admin: action?.payload,
      };
    
    case LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
        isAuthenticated: true,
        loading: false,
        error: {},
      };
    case LOGIN_ADMIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        admin: [],
      };
    case OTP_SENT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OTP_SENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TC_OTP_SENT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TC_OTP_SENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_CURRENT_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentAdmin: action.payload,
        error: {},
      };
    case SET_CONTACT_NUMBER:
      return {
        ...state,
        loading: false,
        contactNumber: action.payload,
      };
    case GET_CURRENT_ADMIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOGIN_ADMINS_FAILED:
      return {
        ...state,
        loading: false,
        verifyLoading: false,
        // showOtpModal: true,
        errors: action.payload,
      };

    // case LOGIN_USER_SUCCESSFUL:
    // return {
    //   ...state,
    //   loading: false,
    //   verifyLoading: false,
    //   showOtpModal: false,
    //   isAuthenticated: true,
    //   user: action.payload.user,
    // };

    // case SET_CURRENT_USER:
    //   return {
    //     ...state,
    //     isAuthenticated: !isEmpty(action.payload),
    //     user: isEmpty(action.payload) ? null : action.payload,
    //   };

    // case LOGIN_USER_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     verifyLoading: false,
    //     showOtpModal: true,
    //     errors: action.payload,
    //   };
    // case LOGOUT:
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //     loading: false,
    //     admin: null,
    //   };
    // case SET_CURRENT_ADMIN: {
    //   return {
    //     ...state,
    //     isAuthenticated: !isEmpty(action.payload),
    //     admin: isEmpty(action.payload) ? null : action.payload,
    //   };
    // }

    default:
      return state;
  }
};

export default loginReducer;
