import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './redux/store';
import history from './utils/history';

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>Hello</ConnectedRouter>
  </Provider>
);

export default App;
