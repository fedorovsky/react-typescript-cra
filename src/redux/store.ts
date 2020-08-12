import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../utils/history';
import { rootReducer, RootState } from './reducer';

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunk as ThunkMiddleware<RootState, AnyAction>,
    routerMiddleware(history),
  ),
);

const store = createStore(rootReducer, enhancer);

export default store;
