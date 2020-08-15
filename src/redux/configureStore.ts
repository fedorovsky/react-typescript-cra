import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, AnyAction, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createRootReducer, RootState } from 'redux/createRootReducer';

export const history = createBrowserHistory();

const configureStore = (preloadedState?: RootState): Store => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk as ThunkMiddleware<RootState, AnyAction>,
      ),
    ),
  );

  return store;
};

export default configureStore;
