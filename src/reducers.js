import { combineReducers } from 'redux';

const isAuth = (state = false, action) => {
  if (action.type === 'AUTENTICATE') {
    return !state;
  }
  return state;
};

const requestStatus = (state = 'none', action) => {
  if (action.type === 'REQUEST_SUCCESS') {
    return 'success';
  }
  if (action.type === 'REQUEST_SENDING') {
    return 'requested';
  }
  if (action.type === 'REQUEST_FAILURE') {
    return 'failure';
  }
  if (action.type === 'NONE') {
    return 'none';
  }
  return state;
};

const errorMsg = (state = null, action) => {
  if (action.type === 'ADD_MESSAGE') {
    return {
      email: action.payload.email,
      username: action.payload.username,
      password: action.payload.password,
      emailOrPassword: 'Email or password is invalid',
    };
  }
  return state;
};

const userName = (state = '', action) => {
  if (action.type === 'ADD_USERNAME') {
    return action.payload.name;
  }
  if (action.type === 'REMOVE_USERNAME') {
    return '';
  }
  return state;
};

export default combineReducers({
  isAuth,
  userName,
  errorMsg,
  requestStatus,
});
