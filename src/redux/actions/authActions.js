import { LOGIN, LOGOUT } from './types';

export const loginUser = user => dispatch => {
  //make request to the backend (reducer will handle response to determine if logged in)
  console.log(user.username);
  let authToken= "";
  dispatch({
    type: LOGIN,
    payload: { authToken: authToken, username: user.username},
  });
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};
