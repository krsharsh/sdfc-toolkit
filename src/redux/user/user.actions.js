import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setProductionCode = (code) => ({
  type: UserActionTypes.SET_PRODUCTION_CODE,
  payload: {
    code: code,
  },
});
