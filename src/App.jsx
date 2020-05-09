import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Home from './Home';
import Signup from './Singup';

const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
});

function App(props) {
  console.log(props);
  return (
    <Router>
      <PrivateRoute store={props.isAuth} exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

const PrivateRoute = ({ component: Component, store, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (store ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    ))}
  />
);

export default connect(mapStateToProps)(App);
