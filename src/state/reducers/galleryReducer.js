import { submissions } from '../actions';

const initialState = {
  WritingUrl: '',
  PageNum: 0,
  DrawingUrl: '',
  children_id: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case submissions.SET_WEEKLY_SUBMISSIONS:
      return {
        ...state,
        WritingUrl: action.payload.WritingUrl,
        PageNum: action.payload.PageNum,
        DrawingUrl: action.payload.DrawingUrl,
        children_id: action.payload.children_id,
      };

    default:
      return state;
  }
};
