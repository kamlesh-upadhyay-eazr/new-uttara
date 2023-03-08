import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import setAuthToken from "../../src/utils/setAuthToken"
import { setCurrentAdmin } from "../store/auth/signin/actions";
import jwt_decode from "jwt-decode"
import { store } from "../store";
// if (localStorage.accessToken) {
//   setAuthToken(localStorage.accessToken);
//   const decoded = jwt_decode(localStorage.accessToken)
//   store.dispatch(setCurrentAdmin(decoded.adminID, localStorage.accessToken))
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(setCurrentAdmin(null))
//   }
// }


const AppRoute = ({
  path,
  component: Component,
  isAuthProtected,
  isAuthenticated,
  ...rest

}) => (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthProtected && isAuthenticated) {
          // console.log("isAuthProtected1", isAuthProtected);
          console.log("isAuthenticated2", !isAuthenticated);
          return (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: props.location.pathname }
              }}
            />
          );
        }
        else if (isAuthProtected && !isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location.pathname }
              }}
            />
          );
        }
        return (
          <>
            <Component {...props} />
          </>
        );
      }}
    />)

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(AppRoute);
