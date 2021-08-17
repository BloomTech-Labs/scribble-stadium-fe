import { actionTypes, modalViews } from './StorybookManager.Reducer';

/**
 *
 * @param {string} view The view of the list of files. Current Options: Titles
 * @returns ReducerAction
 */
export const changeListViewMode = view => ({
  type: actionTypes.CHANGE_VIEW_LIST_MODE,
  payload: view,
});

/**
 *
 * @param {boolean} status Input to either open or close nav sidebar
 * @returns
 */
export const toggleNavCollapsed = status => ({
  type: actionTypes.TOGGLE_NAV_COLLAPSED,
  payload: status,
});

// Modal Actions

export const showModalAddAudiobook = () => ({
  type: actionTypes.CHANGE_VIEW_MODAL,
  payload: {
    isModalOn: true,
    modalView: modalViews.ADD_AUDIOBOOK,
  },
});

/**
 *
 * @param {boolean} status inserts a boolean into the toggleModal ReducerAction. This input will either enable or disable the modal.
 * @returns ReducerAction
 */
export const toggleModal = status => ({
  type: actionTypes.TOGGLE_MODAL,
  payload: status,
});
