import { History } from 'history';
import { applyMiddleware, createStore, AnyAction, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createRootReducer, RootState } from 'store';

const configureStore = (
  history: History,
  initialState?: RootState,
): Store<RootState> => {
  const store = createStore(
    createRootReducer(history),
    initialState,
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
