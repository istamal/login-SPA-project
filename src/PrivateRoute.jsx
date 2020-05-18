import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatus,
});

const PrivateRoute = ({
  requestStatus, component: Component, store, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (requestStatus === 'success' ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    ))}
  />
);

export default connect(mapStateToProps)(PrivateRoute);
