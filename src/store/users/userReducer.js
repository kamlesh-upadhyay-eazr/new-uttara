import {
  USERS_LOADING,
  GET_ALL_PARTICIPANTS_SUCCESS,
  GET_ALL_PARTICIPANTS_FAILED,
  GET_PARTICIPANTS_BY_ID_SUCCESS,
  GET_PARTICIPANTS_BY_ID_FAILED,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
  GET_SEARCH_USERS_SUCCESS,
  GET_SEARCH_USERS_FAILED,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILED,
  GET_SEARCH_PARTICIPANTS_SUCCESS,
  GET_SEARCH_PARTICIPANTS_FAILED,
  TICKET_DETAILS,
} from "./userTypes";

const initialState = {
  users: [],
  singleUser: [],
  searchedUsers: [],
  searchedParticipant: [],
  allParticipants: [],
  singleParticipant: {},
  loading: false,
  errors: {},
  ticketDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: true,
        errors: {},
      };

    case GET_ALL_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        allParticipants: action.payload,
      };

    case GET_ALL_PARTICIPANTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case TICKET_DETAILS:
      return {
        ...state,
        ticketDetails: action.payload,
      };

    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        singleUser: action.payload,
        errors: {},
      };

    case GET_USER_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        users: action.payload,
      };

    case GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case GET_SEARCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        searchedUsers: action.payload,
      };

    case GET_SEARCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case GET_SEARCH_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchedParticipant: action.payload,
        errors: {},
      };

    case GET_SEARCH_PARTICIPANTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    case GET_PARTICIPANTS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        singleParticipant: action.payload,
      };

    case GET_PARTICIPANTS_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
