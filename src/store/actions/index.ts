import { SetActiveRes, SetActiveBlock, SetEditorState } from "./editor-state";
import { CreateEmpty, ContentSetBlock } from "./content-state";

export interface NullAction {
  type: TypeKeys.NULL;
}

// Keep this type updated with each known action
export type ActionTypes =
  | NullAction
  | CreateEmpty
  | SetActiveRes
  | SetActiveBlock
  | SetEditorState
  | ContentSetBlock;

export enum TypeKeys {
  // Won't match anything
  NULL = "NULL",
  ERROR = "ERROR",

  CREATE_EMPTY = "CREATE_EMPTY",
  SET_ACTIVE_RES = "SET_ACTIVE_RES",
  SET_ACTIVE_BLOCK = "SET_ACTIVE_BLOCK",
  SET_EDITOR_STATE = "SET_EDITOR_STATE",

  CONTENT_SET_BLOCK = "CONTENT_SET_BLOCK"
}
