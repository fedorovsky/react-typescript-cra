import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { usersReducer } from './users';
import { integrationReducer } from './integration';

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    integration: integrationReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
