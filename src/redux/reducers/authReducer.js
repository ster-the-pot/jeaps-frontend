import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  user: null,
  authToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.username,
        authToken: action.payload.authToken,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        authToken: null,
      };
    default:
      return state;

    
  }
};
