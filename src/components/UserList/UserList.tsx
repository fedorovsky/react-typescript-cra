import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { userListSelector, fetchUserList } from 'store/users';
import { Wrapper } from './UserList.styled';

const UserList: React.FC = () => {
  const userList = useSelector(userListSelector, shallowEqual);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(fetchUserList());

  return (
    <Wrapper>
      <button type="button" onClick={handleClick}>
        GET USER LIST
      </button>

      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default UserList;
