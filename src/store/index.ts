import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { usersReducer, UsersState } from 'store/users';

// The top-level state object
export interface RootState {
  router: RouterState;
  users: UsersState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    users: usersReducer,
  });
