import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// import { usersReducer } from './users/users';
import usersReducer from './slices/usersSlice';
import { integrationReducer } from './integration';

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    integration: integrationReducer,
  });

export default rootReducer;
