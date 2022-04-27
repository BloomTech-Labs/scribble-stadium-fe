import { child, global } from '../state/actions';
import { reducer } from '../state/reducers/childReducer';

describe('childReducer test suite', () => {
  const initialState = {
    id: null,
    name: null,
    isDyslexic: null,
    avatarUrl: null,
    data: null,
    gamemode: {
      mode: null,
      read: null,
      session: null,
      write: null,
      draw: null,
      sp: null,
    },
    gradeLevel: null,
    parentId: null,
    cohortId: null,
    memberId: null,
    VotesRemaining: null,
    totalPoints: null,
    wins: null,
    losses: null,
    achievements: null,
    Ballots: [],
    Streaks: 'test',
  };

  it('should return the initial state with no actions passed in', () => {
    const action = { type: null };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  test.skip('should return correct information for payload passed into set child', () => {
    const action = {
      type: child.SET_CHILD,
      payload: {
        ID: 1,
        Name: 'someone',
        IsDyslexic: false,
        AvatarURL: 'some url',
        GradeLevel: '3',
        ParentID: 1,
        CohortID: 1,
        Ballots: null,
        Streaks: 'test',
        VotesRemaining: null,
        achievements: null,
        avatarUrl: null,
        cohortId: 1,
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual(action.payload);
  });

  it('should update the member id', () => {
    const action = {
      type: child.SET_MEMBER_ID,
      payload: {
        ...initialState,
        MemberID: 1,
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      memberId: 1,
    });
  });

  it('should return initial state when clearusers is called', () => {
    const action = { type: global.CLEAR_USERS };
    const state = reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
