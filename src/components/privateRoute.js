import React, { useContext, useNavigate } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
 const  isAuthenticated = !!localStorage.getItem('accessToken');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component key={props.location.key} {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};


export default PrivateRoute;