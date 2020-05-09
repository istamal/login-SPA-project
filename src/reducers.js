import { combineReducers } from 'redux';

const isAuth = (state = false, action) => {
  if (action.type === 'AUTENTICATE') {
    return !state;
  }
  return state;
};

const errorMsg = (state = null, action) => {
  if (action.type === 'ADD_MESSAGE') {
    return 'Неверный email или пароль';
  }
  return state;
};

const userName = (state = '', action) => {
  if (action.type === 'ADD_USERNAME') {
    return action.payload.name;
  }
  return state;
};

export default combineReducers({
  isAuth,
  userName,
  errorMsg,
});
