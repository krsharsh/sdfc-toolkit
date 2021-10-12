import { EnvironmentActionTypes } from './environment.types';
const INITIAL_STATE = {
  env: null,
};

const environmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EnvironmentActionTypes.SET_ENVIRONMENT:
      return {
        ...state,
        env: action.payload,
      };
    default:
      return state;
  }
};

export default environmentReducer;
