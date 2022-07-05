import React from "react";
import { Route as ReactDOMRoute, Navigate } from "react-router-dom";

//import { useAuth } from "../hooks/auth";

const Route = ({ isPrivate, isAuthenticated, ...rest }) => {
  //const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (
        isAuthenticated
        ? (
          isPrivate
        ) : (
          <Navigate
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        ))
      }
    />
  );
};

export default Route;

