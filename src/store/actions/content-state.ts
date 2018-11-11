import { TypeKeys } from "../actions/index";

export interface CreateEmpty {
  type: TypeKeys.CREATE_EMPTY;
}

export const contentStateCreateEmpty = () => async (dispatch) => {
  return dispatch({
    type: TypeKeys.CREATE_EMPTY
  });
};
