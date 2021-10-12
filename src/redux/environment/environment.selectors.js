import { createSelector } from 'reselect';

const selectEnvironmentReducer = (state) => state.environment;

export const selectEnvironment = createSelector(
  [selectEnvironmentReducer],
  (environment) => environment.env
);
