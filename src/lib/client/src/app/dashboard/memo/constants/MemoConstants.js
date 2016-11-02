var keyMirror = require('keymirror');

const MemoConstants = keyMirror({
  TODO_CREATE: null,
  TODO_TOGGLE_COMPLETE: null,
  TODO_TOGGLE_COMPLETE_ALL: null,
  TODO_DESTROY: null,
  TODO_UPDATE_TEXT: null,
  TODO_DESTROY_COMPLETED: null
});

export { MemoConstants as default};
