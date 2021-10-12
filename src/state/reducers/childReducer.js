import { child, global } from '../actions';

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
  wins: 0,
  losses: 0,
  achievements: null,
  Ballots: [],
  Streaks: 'test',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case child.SET_CHILD:
      return {
        ...state,
        id: action.payload.ID,
        name: action.payload.Name,
        isDyslexic: action.payload.IsDyslexic,
        avatarUrl: action.payload.AvatarURL,
        gamemode: action.payload.GameMode,
        gradeLevel: action.payload.GradeLevel,
        parentId: action.payload.ParentID,
        cohortId: action.payload.CohortID,
        wins: action.payload.Wins,
        losses: action.payload.Losses,
        totalPoints: action.payload.Total_Points,
        achievements: action.payload.Achievements,
        VotesRemaining: action.payload.VotesRemaining,
        Ballots: action.payload.Ballots,
        Streaks: action.payload.Streaks,
      };
    case child.SET_MEMBER_ID:
      return {
        ...state,
        memberId: action.payload.MemberID,
      };
    case global.CLEAR_USERS:
      return initialState;
    case child.INCREMENT:
      return {
        ...state,
        wins: initialState.wins + 1,
      };
    default:
      return state;
  }
};
