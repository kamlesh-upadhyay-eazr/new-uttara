import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAILED,
  GET_EVENTS_REQUEST,
  GET_EVENTS_BY_ID,
  GET_EVENTS_BY_ID_FAILED,
  GET_SEARCH_EVENTS,
  GET_SEARCH_EVENTS_FAILED,
  GET_ALL_EVENTS_COUNT,
  GET_ALL_EVENTS_COUNT_FAILED,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILED,
  DELETE_ACTIVITY_BY_ID_FAILED,
  INCREMENT,
  DECREMENT,
  EVENT_LOADING,
  ADULT_INCREMENT,
  ADULT_DECREMENT,
  ADD_NEW_EVENT,
  ADD_NEW_EVENT_FAILED,
} from "./actionTypes";

import axios from "axios";
import { ip } from "../../config/config";

export const FetchEventsRequest = () => {
  return {
    type: GET_EVENTS_REQUEST,
  };
};

export const eventLoading = () => {
  return {
    type: EVENT_LOADING,
  };
};

export const Increment = (childCount) => {
  return {
    type: INCREMENT,
    payload: childCount + 1,
  };
};

export const Decrement = (childCount) => {
  return {
    type: DECREMENT,
    payload: childCount - 1,
  };
};

export const adultIncrement = (adultCount, itemId) => {
  console.log("adultCount", adultCount);
  console.log("itemId", itemId);
  return {
    type: ADULT_INCREMENT,
    payload: adultCount + 1,
  };
};

export const adultDecrement = (adultCount) => {
  return {
    type: ADULT_DECREMENT,
    payload: adultCount - 1,
  };
};
// export const FetchEventsSuccess = (users) => {
//   return {
//     type: GET_EVENTS_SUCCESS,
//     payload: users,
//   };
// };

export const increment = (itemId, item, adultCount) => {
  return {
    type: "TICKET_INCREMENT",
    itemId,
    payload: adultCount + 1,
  };
};
export const decrement = (itemId, item, adultCount) => {
  return {
    type: "TICKET_DECREMENT",
    itemId,
    payload: adultCount - 1,
  };
};
export const add_counter = () => {
  return {
    type: "ADD_COUNTER",
  };
};

export const addNewEvent = (data) => {
  return (dispatch) => {
    dispatch(eventLoading());
    axios
      .post(`${ip}/add-event`, data)
      .then((res) => {
        dispatch({
          type: ADD_NEW_EVENT,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_NEW_EVENT_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getEvents = (pageNumber) => {
  return (dispatch) => {
    dispatch(eventLoading());
    axios
      .get(`${ip}/get-all-activity`)
      .then((res) => {
        dispatch({
          type: GET_EVENTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_EVENTS_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getAllEvents = () => {
  return (dispatch) => {
    dispatch(eventLoading());
    axios
      .get(`${ip}/events`)
      .then((res) => {
        dispatch({
          type: GET_ALL_EVENTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err.message);
        dispatch({
          type: GET_ALL_EVENTS_FAILED,
          payload: err.message,
        });
      });
  };
};

export const eventsCounter = () => {
  return function (dispatch) {
    dispatch(eventLoading());
    axios.get(`${ip}/get-all-activity/count`).then((res) => {
      dispatch({
        type: GET_ALL_EVENTS_COUNT,
        payload: res.data,
      }).catch((err) => {
        dispatch({
          type: GET_ALL_EVENTS_COUNT_FAILED,
          payload: err.message,
        });
      });
    });
  };
};

export const getSearchEvents = (search, pageNumber) => {
  return function (dispatch) {
    dispatch(eventLoading());
    axios
      .get(
        `http://localhost:8000/get-all-events?filter=${search}&page=${pageNumber}`
      )
      .then((res) => {
        dispatch({
          type: GET_SEARCH_EVENTS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SEARCH_EVENTS_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getEventsById = (id) => {
  console.log("actionId", id);
  return (dispatch) => {
    dispatch(eventLoading());
    axios
      .get(`${ip}/get-activity/${id}`)
      .then((res) => {
        dispatch({
          type: GET_EVENTS_BY_ID,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_EVENTS_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};

export const deleteActivityById = (id) => {
  console.log("actionId", id);
  return (dispatch) => {
    dispatch(eventLoading());
    axios
      .delete(`${ip}/delete-activity/${id}`)
      .then((res) => {
        axios
          .get(`${ip}/get-all-activity`)
          .then((res) => {
            dispatch({
              type: GET_EVENTS_SUCCESS,
              payload: res.data,
            });
          })
          .catch((err) => {
            dispatch({
              type: GET_EVENTS_FAILED,
              payload: err.message,
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_ACTIVITY_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};
