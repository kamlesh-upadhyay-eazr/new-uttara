import {
  LOGIN_ADMIN_SUCCESS,
  LOGIN_ADMINS_FAILED,
  OTP_SENT,
  OTP_SENT_FAILED,
  TC_OTP_SENT,
  TC_OTP_SENT_FAILED,
  ORGANISER_OTP_SENT,
  ORGANISER_OTP_SENT_FAILED,
  LOGIN_ADMIN_LOADING,
  SET_CURRENT_ADMIN,
  SET_CONTACT_NUMBER,
  LOGIN_ADMIN_SUCCESSFUL,
  GET_CURRENT_ADMIN_SUCCESS,
  GET_CURRENT_ADMIN_FAILED,
  LOGOUT,
} from "./actionTypes";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { ip } from "../../../config/config";

import setAuthToken from "../../../utils/setAuthToken";

const setLoginLoading = () => {
  return {
    type: LOGIN_ADMIN_LOADING,
  };
};

// export const login = (data, history) => {
//   return (dispatch) => {
//     dispatch(setLoginLoading());
//     axios
//     .post(`http://localhost:8000/login-admin`, data)
//       // .post(`${ip}/login-admin`, data)
//       .then((res) => {
//         console.log("res", res);
//         const authToken = res.data.token;
//         if (res.data.token !== null) {
//           localStorage.setItem("accessToken", res.data.token)
//           setAuthToken(res.data.token);
//           const decoded = jwt_decode(res.data.token)
//           // const data = {decoded, authToken}
//           dispatch({
//             type: LOGIN_ADMIN_SUCCESS,
//             payload: authToken
//           });
//           history.push('/')
//         }
//       })
//       .catch((err) => {
//         console.log("Err", err.message);
//         alert(err.message);
//         dispatch({
//           type: LOGIN_ADMIN_FAILED,
//           payload: err.message,
//         });
//       });
//   };
// };

export const login = (contactNumber) => {
  return (dispatch) => {
    dispatch(setLoginLoading());
    axios
      .post(`${ip}/admin-sendOTP`, { contactNumber })
      .then((res) => {
        dispatch({
          type: OTP_SENT,
          payload: res.data?.message,
        });
      })
      .catch((err) => {
        dispatch({
          type: OTP_SENT_FAILED,
          payload: err.response?.data?.message,
        });
      });
  };
};

export const tclogin = (contactNumber, history) => {
  return (dispatch) => {
    dispatch(setLoginLoading());
    axios
      .post(`${ip}/tc-sendOTP`, { contactNumber })
      .then((res) => {
        dispatch({
          type: TC_OTP_SENT,
          payload: res.data?.message,
        });
        // if(res.statusText === "OK"){
        //   history.push('/sign-in/otp');
        // }
      })
      .catch((err) => {
        dispatch({
          type: TC_OTP_SENT_FAILED,
          payload: err.response?.data?.message,
        });
      });
  };
};

export const operatorlogin = (contactNumber, history) => {
  return (dispatch) => {
    dispatch(setLoginLoading());
    axios
      .post(`${ip}/organiser-sendOTP`, { contactNumber })
      .then((res) => {
        dispatch({
          type: ORGANISER_OTP_SENT,
          payload: res.data?.message,
        });
        // if(res.statusText === "OK"){
        //   history.push('/sign-in/otp');
        // }
      })
      .catch((err) => {
        dispatch({
          type: ORGANISER_OTP_SENT_FAILED,
          payload: err.response?.data?.message,
        });
      });
  };
};

export const setContactNumber = (contactNumber) => {
  return {
    type: SET_CONTACT_NUMBER,
    payload: contactNumber,
  };
};

export const adminVerify =
  (contactNumber, otp, history) => async (dispatch) => {
    try {
      const res = await axios.post(`${ip}/admin-verifyOTP`, {
        contactNumber,
        otp,
      });

      if (res.data !== null) {
        const { accessToken } = res.data;
        localStorage.setItem("accessToken", accessToken);
        setAuthToken(accessToken);
        // const decoded = jwt_decode(token);
        dispatch(loginAdminSuccessful(res.data));
        history.push("/");
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ADMINS_FAILED,
        payload: error.response?.data?.otpverify,
      });
    }
  };

export const tcVerify = (contactNumber, otp, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${ip}/tc-verifyOTP`, {
      contactNumber,
      otp,
    });

    if (res.data !== null) {
      const { accessToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      setAuthToken(accessToken);
      // const decoded = jwt_decode(token);
      dispatch(loginAdminSuccessful(res.data));
      history.push("/");
    }
  } catch (error) {
    dispatch({
      type: LOGIN_ADMINS_FAILED,
      payload: error.response?.data?.otpverify,
    });
  }
};

export const resendOTP = (contactNumber) => {
  return (dispatch) => {
    dispatch(setLoginLoading());

    axios
      .post(`${ip}/admin-sendOTP${contactNumber}`)
      .then((res) => {
        dispatch({
          type: OTP_SENT,
        });
      })
      .catch((err) => {
        dispatch({
          type: OTP_SENT_FAILED,
          payload: err.message,
        });
      });
  };
};

export const loginAdminSuccessful = (admin) => {
  return {
    type: LOGIN_ADMIN_SUCCESSFUL,
    payload: admin,
  };
};

export const setErrorMessage = (error) => {
  return {
    type: LOGIN_ADMINS_FAILED,
    payload: error,
  };
};

export const getCurrentAdmin = () => {
  return (dispatch) => {
    dispatch(setLoginLoading());
    axios
      .get(`${ip}/admin/me`)
      .then((res) => {
        dispatch({
          type: GET_CURRENT_ADMIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_CURRENT_ADMIN_FAILED,
          payload: err.messaage,
        });
      });
  };
};

export const setCurrentAdmin = (decoded) => {
  return {
    type: SET_CURRENT_ADMIN,
    payload: decoded,
  };
};

export const logout = (state) => {
  return {
    type: LOGOUT,
  };
};
