import {
  USERS_LOADING,
  GET_ALL_PARTICIPANTS_SUCCESS,
  GET_ALL_PARTICIPANTS_FAILED,
  GET_SEARCH_PARTICIPANTS_SUCCESS,
  GET_SEARCH_PARTICIPANTS_FAILED,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILED,
  GET_SEARCH_USERS_SUCCESS,
  GET_SEARCH_USERS_FAILED,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILED,
  GET_PARTICIPANTS_BY_ID_SUCCESS,
  GET_PARTICIPANTS_BY_ID_FAILED,
  TICKET_DETAILS
} from "./userTypes";

import axios from "axios";
import { ip } from "../../config/config";

export const getUsers = (pageNumber) => {
  return (dispatch) => {
    dispatch(setUsersLoading());
    axios
      .get(`${ip}users?page=${pageNumber}&limit=10`)
      .then((res) => {
        dispatch({
          type: GET_ALL_USERS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err.message);
        dispatch({
          type: GET_ALL_USERS_FAILED,
          payload: err.message,
        });
      });
  }
}

export const ticketDetails = (data) => {
  console.log(data);
  return {
    type: TICKET_DETAILS,
    payload: data,
  };
};

export const getUserById = (id) => {
  return (dispatch) => {
    dispatch(setUsersLoading());
    axios
      .get(`${ip}/get-user/${id}`)
      .then((res) => {
        debugger;
        dispatch({
          type: GET_USER_BY_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err.message);
        dispatch({
          type: GET_USER_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};
export const getParticipantsById = (id) => {
  return (dispatch) => {
    dispatch(setUsersLoading());
    axios
      .get(`${ip}/get-participants/${id}`)
      .then((res) => {
        debugger;
        dispatch({
          type: GET_PARTICIPANTS_BY_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err.message);
        dispatch({
          type: GET_PARTICIPANTS_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getSearchUsers = (search, pageNumber) => {
  return function (dispatch) {
    dispatch(setUsersLoading());
    axios
      .get(
        `http://localhost:8000/users/search?filter=${search}&page=${pageNumber}`
      )
      .then((res) => {
        dispatch({
          type: GET_SEARCH_USERS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_USERS_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getParticipants = (pageNumber) => {
  return (dispatch) => {
    dispatch(setUsersLoading());
    axios
      .get(
        `http://localhost:8000/get-participants?page=${pageNumber}&limit=10`
      )
      .then((res) => {
        dispatch({
          type: GET_ALL_PARTICIPANTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err.message);
        dispatch({
          type: GET_ALL_PARTICIPANTS_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getParticipantById = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch(setUsersLoading());
    axios
      .get(
        `${ip}/get-participants/${id}`
      )
      .then((res) => {
        
        dispatch({
          type: GET_PARTICIPANTS_BY_ID_SUCCESS,
          payload: res.data,
        });

      })
      .catch((err) => {
        console.log("err", err.message);
        dispatch({
          type: GET_PARTICIPANTS_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getSearchParticipants = (search) => {
  debugger;
  return  (dispatch) => {
    dispatch(setUsersLoading())
    axios
      .get(`http://localhost:8000/participants/search?q=${search}`)
      .then((res) => {
        dispatch({
          type: GET_SEARCH_PARTICIPANTS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        debugger;
        dispatch({
          type: GET_SEARCH_PARTICIPANTS_FAILED,
          payload: err.message,
        });
      });
    
  }
}

const setUsersLoading = () => {
  return {
    type: USERS_LOADING,
  };
};
