import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { usersReducer, UsersState } from './users';
import integrationReducer, { IntegrationState } from './integration';

// The top-level state object
export interface RootState {
  router: RouterState;
  users: UsersState;
  integration: IntegrationState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    integration: integrationReducer,
  });
