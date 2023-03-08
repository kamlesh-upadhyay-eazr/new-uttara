import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
//
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "rc-slider/assets/index.css";
// STYLE
import "./styles/index.scss";
import "./index.css";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css";

//
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from 'react-redux';
import { store } from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "utils/setAuthToken";
import { setCurrentAdmin } from "store/auth/signin/actions";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// function setCurrentAdmin(admin: any, accessToken: string | null) {
//   if (localStorage.accessToken) {
//     setAuthToken(localStorage.accessToken);
//     const decoded: any = jwt_decode(localStorage.accessToken);
//     store.dispatch(setCurrentAdmin(decoded.admin, localStorage.accessToken));
//     const currentTime = Date.now() / 1000;
//     if (decoded.exp < currentTime) {
//       store.dispatch(setCurrentAdmin(null, null));
//     }
//   }
// }


if (localStorage.accessToken) {
  setAuthToken(localStorage.accessToken);
  const decoded = jwt_decode(localStorage.accessToken);
  store.dispatch(setCurrentAdmin(decoded.admin, localStorage.accessToken));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(setCurrentAdmin(null));
  }
};


root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
