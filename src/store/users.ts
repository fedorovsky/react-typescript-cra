import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import http from 'utils/api';
import { RootState } from './index';

/**
 * Constants
 */
export enum ACTION {
  USERS_REQUEST = '@@users/USERS_REQUEST',
  USERS_SUCCESS = '@@users/USERS_SUCCESS',
  USERS_FAILURE = '@@users/USERS_FAILURE',
}

export interface User {
  id: number;
  name: string;
  username: string;
}

export interface UsersState {
  readonly list: User[];
  readonly loading: boolean;
  readonly error: string;
}

const initialState: UsersState = {
  list: [],
  loading: false,
  error: '',
};

const reducer: Reducer<UsersState, ActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ACTION.USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION.USERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export { reducer as usersReducer };

/**
 * Selectors
 */
export const stateSelector = (state: RootState): UsersState => state.users;
export const userListSelector = createSelector(
  stateSelector,
  (state) => state.list,
);

/**
 * Action Creators
 */
interface UserRequest {
  type: typeof ACTION.USERS_REQUEST;
}

interface UserSuccess {
  type: typeof ACTION.USERS_SUCCESS;
  payload: User[];
}

type ActionType = UserRequest | UserSuccess;

type ThunkResult<R> = ThunkAction<R, RootState, void, ActionType>;

export const fetchUserList = (): ThunkResult<void> => {
  return async (dispatch) => {
    dispatch({
      type: ACTION.USERS_REQUEST,
    });
    const userList = await http<User[]>(
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log('userList', userList);
    dispatch({
      type: ACTION.USERS_SUCCESS,
      payload: userList,
    });
  };
};
