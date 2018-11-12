import { TypeKeys } from "../actions/index";

export interface SetActiveRes {
  type: TypeKeys.SET_ACTIVE_RES;
  res: any;
}

export interface SetActiveBlock {
  type: TypeKeys.SET_ACTIVE_BLOCK;
  block: any;
}

export interface SetEditorState {
  type: TypeKeys.SET_EDITOR_STATE;
  state: string;
}

export const setActiveRes = (res: any) => async dispatch => {
  return dispatch({
    type: TypeKeys.SET_ACTIVE_RES,
    res: res
  });
};

export const setActiveBlock = (block: any) => async dispatch => {
  return dispatch({
    type: TypeKeys.SET_ACTIVE_BLOCK,
    block: block
  });
};

export const contentSetEditorState = (state: string) => async dispatch => {
  return dispatch({
    type: TypeKeys.SET_EDITOR_STATE,
    state: state
  });
};
