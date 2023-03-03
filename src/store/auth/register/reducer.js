import {
  GET_REGISTER_ADMIN_FAILED,
  ADMIN_LOADING,
  GET_REGISTER_ADMIN_SUCCESS,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_BY_ID_FAILED,
  REGISTER_ADMIN_ORGANISER_FAILED,
  REGISTER_ADMIN_ORGANISER_SUCCESS,
  EDIT_ADMIN_ORGANISER_SUCCESS,
  EDIT_ADMIN_ORGANISER_FAILED,
} from "./actionTypes";

const initialState = {
  error: null,
  isAuthenticated: false,
  loading: false,
  register: [],
  organiser: [],
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_REGISTER_ADMIN_SUCCESS:
      return {
        ...state,
        register: action.payload,
        loading: false,
        error: null,
      };
    case GET_ADMIN_BY_ID_SUCCESS:
      return {
        ...state,
        currentAdmin: action.payload,
        loading: false,
        error: null,
      };

    case GET_ADMIN_BY_ID_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case REGISTER_ADMIN_ORGANISER_SUCCESS:
      return {
        ...state,
        loading: false,
        organiser: action.payload,
        error: null,
      };

    case REGISTER_ADMIN_ORGANISER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_REGISTER_ADMIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        register: [],
      };

    case EDIT_ADMIN_ORGANISER_SUCCESS:
      return {
        ...state,
        loading: false,
        organiser: action.payload,
        error: null,
      };

    case EDIT_ADMIN_ORGANISER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
