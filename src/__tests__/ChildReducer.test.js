import { reducer } from '../state/reducers/childReducer';
import * as child from '../state/actions';

describe('childReducer test suite', () => {
  const initialState = {
    id: null,
    name: null,
    isDyslexic: null,
    avatarUrl: null,
    gradeLevel: null,
    parentId: null,
    cohortId: null,
  };
  it('should return the initial state', () => {
    const action = { type: child.SET_CHILD, payload: {} };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
