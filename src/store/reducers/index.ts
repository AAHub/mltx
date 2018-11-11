import EditorState from "./editor-state";
import ContentState from "./content-state";

import { combineReducers } from "redux";

const rootReducer = (combineReducers as any)({
  EditorState,
  ContentState
});

export default rootReducer;
