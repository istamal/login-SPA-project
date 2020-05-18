import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';
import Signup from './Singup';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = (state) => ({
  requestStatus: state.requestStatus,
});

function App(props) {
  return (
    <Router basename="/login-SPA">
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route
        path="/signup"
        render={
          () => (props.requestStatus === 'success'
            ? <Redirect to="/login" />
            : <Signup />)
        }
      />
    </Router>
  );
}
export default connect(mapStateToProps)(App);
