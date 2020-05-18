import axios from 'axios';

export const auth = () => ({
  type: 'AUTENTICATE',
});

export const addErrorMsg = (err) => ({
  type: 'ADD_MESSAGE',
  payload: err,
});

export const removeUserName = () => ({
  type: 'REMOVE_USERNAME',
});

export const noneRequest = () => ({
  type: 'NONE',
});

export const sendRequest = () => ({
  type: 'REQUEST_SENDING',
});

export const requestSuccess = () => ({
  type: 'REQUEST_SUCCESS',
});

export const requestFailure = () => ({
  type: 'REQUEST_FAILURE',
});

export const addUserName = (username) => ({
  type: 'ADD_USERNAME',
  payload: {
    name: username,
  },
});

export const addUser = (values, path) => async (dispatch) => {
  dispatch(sendRequest());
  try {
    const response = await axios.post(path, { user: values });
    dispatch(addUserName(response.data.user.username));
    dispatch(requestSuccess());
    dispatch(auth());
  } catch (error) {
    dispatch(requestFailure());
    dispatch(addErrorMsg(error.response.data.errors));
  }
};
