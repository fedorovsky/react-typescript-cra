import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { usersReducer } from '../modules/users';
import history from '../utils/history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
