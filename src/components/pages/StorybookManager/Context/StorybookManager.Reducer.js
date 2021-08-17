export const actionTypes = {
  CHANGE_VIEW_LIST_MODE: 'CHANGE_VIEW_LIST_MODE',
  CHANGE_VIEW_MODAL: 'CHANGE_VIEW_MODAL',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  TOGGLE_NAV_COLLAPSED: 'TOGGLE_NAV_COLLAPSED',
};

export const modalViews = {
  ADD_AUDIOBOOK: 'Add An Audiobook',
};

export const initialState = {
  isModalOn: false,
  modalView: undefined,
  isNavCollapsed: false,
  listView: 'Titles',
};

export const storybookUiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return { ...state, isModalOn: action.payload };
    case actionTypes.TOGGLE_NAV_COLLAPSED:
      return { ...state, isNavCollapsed: action.payload };
    case actionTypes.CHANGE_VIEW_LIST_MODE:
      return { ...state, listView: action.payload };
    case actionTypes.CHANGE_VIEW_MODAL:
      const { isModalOn, modalView } = action.payload;
      console.log(isModalOn, modalView);
      return { ...state, isModalOn, modalView };
    default:
      return state;
  }
};
