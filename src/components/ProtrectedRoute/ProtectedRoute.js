import React from "react";
import { Navigate } from "react-router-dom";
import * as api from '../../utils/MainApi';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const [loggedIn, setLoggedIn] = React.useState(props.loggedIn);
  const [loggedInLoaded, setLoggedInLoaded] = React.useState(false);
  
  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      api.checkToken(localStorage.getItem("jwt")).then(() => {
        setLoggedInLoaded(true);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setLoggedInLoaded(true);
        setLoggedIn(false);
      });
    } else {
      setLoggedInLoaded(true)
    }
  }, []);

  return props.loggedIn || loggedIn ? (
    <Component {...props} />
  ) : loggedInLoaded ? (
    <Navigate to="/" replace /> 
  ) : "";
};

export default ProtectedRouteElement;
