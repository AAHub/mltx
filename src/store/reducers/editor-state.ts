import { TypeKeys, ActionTypes } from "../actions/index";
import { Res, Block, getInitialBlock, getInitialRes } from "./content-state";

export enum EditorStateTypes {
  Idle = "idle",
  Input = "input",
  Paste = "paste",
  Drag = "drag"
}

interface EditorState {
  state: string;
  res: Res;
  block: Block;
}

const getInitialState = () => {
  return {
    state: EditorStateTypes.Idle,
    res: getInitialRes(),
    block: getInitialBlock()
  };
};

const app = (state: EditorState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.SET_ACTIVE_RES: {
      return { ...state, res: action.res };
    }
    case TypeKeys.SET_ACTIVE_BLOCK: {
      return { ...state, block: action.block };
    }
    case TypeKeys.SET_EDITOR_STATE: {
      return { ...state, state: action.state };
    }
  }

  return state;
};

export default app;
