import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { usersReducer } from '../modules/users';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    users: usersReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
