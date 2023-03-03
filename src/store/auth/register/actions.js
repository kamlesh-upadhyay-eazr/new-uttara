import {
  GET_REGISTER_ADMIN_SUCCESS,
  ADMIN_LOADING,
  GET_REGISTER_ADMIN_FAILED,
  REGISTER_ADMIN_LOADING,
  REGISTER_ADMIN_SUCCESS,
  REGISTER_ADMIN_FAILED,
  REGISTER_TC_SUCCESS,
  REGISTER_TC_FAILED,
  REGISTER_OPERATOR_SUCCESS,
  REGISTER_OPERATOR_FAILED,
  GET_ADMIN_BY_ID_SUCCESS,
  GET_ADMIN_BY_ID_FAILED,
  REGISTER_ADMIN_ORGANISER_SUCCESS,
  REGISTER_ADMIN_ORGANISER_FAILED,
  EDIT_ADMIN_ORGANISER_SUCCESS,
  EDIT_ADMIN_ORGANISER_FAILED,
} from "./actionTypes";

import axios from "axios";
import { ip } from "../../../config/config";

export const adminLoading = () => {
  return {
    type: ADMIN_LOADING,
  };
};

export const register = () => {
  return (dispatch) => {
    dispatch(adminLoading());
    axios
      .get(`${ip}/register`)
      .then((res) => {
        dispatch({
          type: REGISTER_ADMIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_ADMIN_FAILED,
          payload: err.message,
        });
      });
  };
};

export const registration = (id) => {
  return (dispatch) => {
    dispatch(adminLoading());
    axios
      .get(`${ip}/get-register/${id}`)
      .then((res) => {
        dispatch({
          type: GET_REGISTER_ADMIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_REGISTER_ADMIN_FAILED,
          payload: err.message,
        });
      });
  };
};

export const getAdminById = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/admins/${id}`)
      .then((res) => {
        dispatch({
          type: GET_ADMIN_BY_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ADMIN_BY_ID_FAILED,
          payload: err.message,
        });
      });
  };
};

export const registerAdminSuccess = (data, history) => {
  debugger;
  return (dispatch) => {
    dispatch(adminLoading());
    axios
    .post(`${ip}/register-admin`, data)
    .then((res) => {
      debugger;
      dispatch({
        type: REGISTER_ADMIN_SUCCESS,
        payload: res.data
      })
      history.push("/sign-in");
    })
    .catch((err) => {
      debugger;
      dispatch({
        type: REGISTER_ADMIN_FAILED,
        payload: err.message,
      });
      
    })
  };
};

export const registerTicketCounterSuccess = (data, history) => {
  debugger;
  return (dispatch) => {
    dispatch(adminLoading());
    axios
      .post(`${ip}/register-tc`, data)
      .then((res) => {
        debugger;
        dispatch({
          type: REGISTER_TC_SUCCESS,
          payload: res.data,
        });
        history.push("/sign-in");
      })
      .catch((err) => {
        debugger;
        dispatch({
          type: REGISTER_TC_FAILED,
          payload: err.message,
        });
      });
  };
};

export const registerOperatorSuccess = (data, history) => {
  debugger;
  return (dispatch) => {
    dispatch(adminLoading());
    axios
      .post(`${ip}/register-organiser`, data)
      .then((res) => {
        debugger;
        dispatch({
          type: REGISTER_OPERATOR_SUCCESS,
          payload: res.data,
        });
        history.push("/sign-in");
      })
      .catch((err) => {
        debugger;
        dispatch({
          type: REGISTER_OPERATOR_FAILED,
          payload: err.message,
        });
      });
  };
};

export const createOrganiser = (data, history) => {
  return (dispatch) => {
    dispatch(adminLoading());
    axios.post(`http://localhost:8000/register-organiser`, data)
    .then((res) => {
      dispatch({
        type: REGISTER_ADMIN_ORGANISER_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_ADMIN_ORGANISER_FAILED,
        payload: err.message,
      });
    })
  }
}

export const editOrganiser = (id,data, history) => {
  return(dispatch) => {
    dispatch(adminLoading())
    axios
    .patch(`${ip}/organiser/${id}`, data)
    .then((res) => {
      dispatch({
        type: EDIT_ADMIN_ORGANISER_SUCCESS,
        payload:res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_ADMIN_ORGANISER_FAILED,
        payload:err.message,
      });
    })
  }
}
