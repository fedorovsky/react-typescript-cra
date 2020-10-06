import { Reducer } from 'redux';
import { createSelector } from 'reselect';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';

/**
 * Constants
 */
export enum ACTION {
  SECOND_REQUEST = '@@integration/second/SECOND_REQUEST',
}

export interface IntegrationSecond {
  readonly data: string[];
  readonly loading: boolean;
}

const initialState: IntegrationSecond = {
  data: [],
  loading: false,
};

const reducer: Reducer<IntegrationSecond, ActionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ACTION.SECOND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export { reducer as secondReducer };

/**
 * Selectors
 */
export const stateSelector = (state: RootState): IntegrationSecond =>
  state.integration.second;

export const secondDataSelector = createSelector(
  stateSelector,
  (state) => state.data,
);

/**
 * Action Creators
 */
interface SecondRequest {
  type: typeof ACTION.SECOND_REQUEST;
}

type ActionType = SecondRequest;

type ThunkResult<R> = ThunkAction<R, RootState, void, ActionType>;
