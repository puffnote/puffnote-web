import {
  SHOW_NOTE_DIALOG,
  HIDE_NOTE_DIALOG,
  UPDATE_NOTE,
  ADD_NOTE
} from "../actions/noteDialog";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_NOTE_DIALOG:
      return {
        ...state,
        open: true
      };
    case HIDE_NOTE_DIALOG:
    case UPDATE_NOTE:
    case ADD_NOTE:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};
