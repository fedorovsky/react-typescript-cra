import * as React from 'react';
import UserList from 'components/UserList';
import { Route, NavLink, Routes } from 'react-router-dom';
import Home from 'components/routes/Home';
import Users from 'components/routes/Users';

const App: React.FC = () => (
  <div>
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
    <UserList />
  </div>
);

export default App;
