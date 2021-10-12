import { EnvironmentActionTypes } from './environment.types';

export const setEnvironment = (environment) => ({
  type: EnvironmentActionTypes.SET_ENVIRONMENT,
  payload: environment,
});
