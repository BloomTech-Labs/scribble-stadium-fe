import { team, global } from '../state/actions';
import { reducer } from '../state/reducers/teamReducers';

describe('teamReducer test suite', () => {
  const initialState = {
    teamName: '',
    child1: {},
    child2: {},
  };

  it('should return 2 child objects and a team name', () => {
    const action = {
      type: team.SET_TEAM_SUBMISSIONS,
      payload: {
        1: { ChildID: 1, MemberID: 1 },
        3: { ChildID: 3, MemberID: 2 },
        name: 'test team',
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      teamName: 'test team',
      child1: {
        ChildID: 1,
        MemberID: 1,
      },
      child2: {
        ChildID: 3,
        MemberID: 2,
      },
    });
  });

  it('should return initial state when clearusers is called', () => {
    const action = { type: global.CLEAR_USERS };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return itial state if no action is passed in', () => {
    const action = { type: null };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
