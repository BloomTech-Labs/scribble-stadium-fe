import { parent, global } from '../state/actions';
import { reducer } from '../state/reducers/parentReducer';

describe('parentReducer test suite', () => {
  const initialState = {
    id: null,
    name: null,
    email: null,
    children: [],
  };

  it('should return the initial state with no actions passed in', () => {
    const action = { type: null };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return correct information for payload passed in', () => {
    const action = {
      type: parent.SET_PARENT,
      payload: {
        ID: 1,
        Name: 'someone',
        Email: 'someone@somewhere.com',
        children: [],
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      id: 1,
      name: 'someone',
      email: 'someone@somewhere.com',
      children: [],
    });
  });

  it('should return correct information for children payload', () => {
    const action = {
      type: parent.SET_CHILDREN,
      payload: { Name: 'someone', GradeLevel: '3' },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      children: [{ Name: 'someone', GradeLevel: '3' }],
    });
  });

  it('should return initial state when clearusers is called', () => {
    const action = { type: global.CLEAR_USERS };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
