import { child, global } from '../state/actions';
import { reducer } from '../state/reducers/childReducer';

describe('childReducer test suite', () => {
  const initialState = {
    id: null,
    name: null,
    isDyslexic: null,
    avatarUrl: null,
    gamemode: {
      mode: null,
      read: null,
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

  it('should return correct information for payload passed into set child', () => {
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
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      id: 1,
      name: 'someone',
      isDyslexic: false,
      avatarUrl: 'some url',
      gradeLevel: '3',
      parentId: 1,
      cohortId: 1,
      memberId: null,
    });
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
