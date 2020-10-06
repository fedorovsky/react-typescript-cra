import { combineReducers } from 'redux';
import { firstReducer } from './first';
import { secondReducer } from './second';

const IntegrationReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
});

export type IntegrationState = ReturnType<typeof IntegrationReducer>;

export default IntegrationReducer;
