import { createSelector } from 'reselect';

const selectUser = (state) => state.user;
// const selectProduction = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectCurrentUserProduction = createSelector(
  [selectCurrentUser],
  (currentUser) => (currentUser ? currentUser.production : null)
);

export const selectProduction = createSelector(
  [selectUser],
  (user) => user.production
);
export const selectDevelopment = createSelector(
  [selectUser],
  (user) => user.development
);

export const selectProductionCode = createSelector(
  [selectProduction],
  (production) => production.code
);

export const selectDevelopmentCode = createSelector(
  [selectDevelopment],
  (development) => development.code
);
