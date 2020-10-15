import { reducer } from '../state/reducers/parentReducer';
import * as parent from '../state/actions';

describe('parentReducer test suite', () => {
  const initialState = {
    id: null,
    name: null,
    email: null,
    children: [],
  };

  it('should return the initial state with an empty payload', () => {
    const action = { type: parent.SET_PARENT, payload: {} };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
