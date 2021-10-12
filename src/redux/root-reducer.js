import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import environmentReducer from './environment/environment.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['environment', 'user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  environment: environmentReducer,
});

export default persistReducer(persistConfig, rootReducer);
