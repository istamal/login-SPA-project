import axios from 'axios';

export const auth = () => ({
  type: 'AUTENTICATE',
});

export const addErrorMsg = () => ({
  type: 'ADD_MESSAGE',
});

export const removeUserName = () => ({
  type: 'REMOVE_USERNAME',
});

export const addUserName = (username) => ({
  type: 'ADD_USERNAME',
  payload: {
    name: username,
  },
});

export const addUser = (values) => async (dispatch) => {
  try {
    const response = await axios.post('https://conduit.productionready.io/api/users/login', { user: values });
    dispatch(addUserName(response.data.user.username));
    dispatch(auth());
  } catch (error) {
    dispatch(addErrorMsg());
  }
};
