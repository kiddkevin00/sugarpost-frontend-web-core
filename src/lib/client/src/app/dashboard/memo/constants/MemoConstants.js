import keyMirror from 'keymirror';

const memoConstants = keyMirror({
  TODO_CREATE: null,
  TODO_TOGGLE_COMPLETE: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_DESTROY: null,
  TODO_UPDATE_TEXT: null,
  TODO_DESTROY_COMPLETED: null
});

export default memoConstants;
