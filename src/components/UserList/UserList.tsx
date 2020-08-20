import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { userListSelector, fetchUserList } from 'modules/users';

const UserList: React.FC = () => {
  const userList = useSelector(userListSelector, shallowEqual);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(fetchUserList());

  return (
    <div>
      <button type="button" onClick={handleClick}>
        GET USER LIST
      </button>

      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
