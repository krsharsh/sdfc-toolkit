import { UserActionTypes } from './user.types';
const INITIAL_STATE = {
  currentUser: null,
  production: {
    code: null,
  },
  development: {
    code: null,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.SET_PRODUCTION_CODE:
      return {
        ...state,
        production: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
