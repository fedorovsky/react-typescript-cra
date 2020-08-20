import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, AnyAction } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createRootReducer, RootState } from 'redux/createRootReducer';

export const history = createBrowserHistory();

const configureStore = (preloadedState?: RootState) => {
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

// https://github.com/resir014/react-redux-typescript-example/blob/master/src/store/index.ts
