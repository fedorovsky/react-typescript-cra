import * as React from 'react';
import UserList from 'components/UserList';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from 'components/routes/Home';
import Users from 'components/routes/Users';

const App: React.FC = () => (
  <div>
    <div>
      <NavLink to="/home" activeStyle={{ color: 'red' }}>
        Home
      </NavLink>
      <NavLink to="/users" activeStyle={{ color: 'red' }}>
        Users
      </NavLink>
    </div>
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
    <UserList />
  </div>
);

export default App;
