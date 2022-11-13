import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// browser history
export const history = createBrowserHistory();

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [routerMiddleware(history), thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
