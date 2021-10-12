import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setProductionCodeUser = (code) => ({
  type: UserActionTypes.SET_PRODUCTION_CODE_USER,
  payload: code,
});

export const setDevelopmentCodeUser = (code) => ({
  type: UserActionTypes.SET_DEVLOPMENT_CODE_USER,
  payload: code,
});
