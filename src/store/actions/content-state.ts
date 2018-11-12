import { TypeKeys } from "../actions/index";

export interface CreateEmpty {
  type: TypeKeys.CREATE_EMPTY;
}

export const contentStateCreateEmpty = () => async dispatch => {
  return dispatch({
    type: TypeKeys.CREATE_EMPTY
  });
};

export interface ContentSetBlock {
  type: TypeKeys.CONTENT_SET_BLOCK;
  block: any;
}
export const contentSetBlock = (block: any) => async dispatch => {
  return dispatch({
    type: TypeKeys.CONTENT_SET_BLOCK,
    block: block
  });
};
