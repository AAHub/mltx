import { TypeKeys, ActionTypes } from "../actions/index";
import { generateKey } from "../../helpers/utils";

export interface ContentState {
  res: Res[];
}

export interface Res {
  row: number;
  blocks: Block[];
}

export interface Block {
  key: string;
  x: number;
  y: number;
  text: string;
}

export const getInitialState = () => {
  return {
    res: [getInitialRes()]
  };
};

export const getInitialRes = () => {
  return {
    row: 10,
    blocks: [
      getInitialBlock(
        0,
        3,
        `　 ∧＿∧ 　
　（　´∀｀）
　（　　　　） 
　｜ ｜　| 
　（_＿）＿）`
      )
    ]
  };
};

export const getInitialBlock = (
  x: number = 0,
  y: number = 3,
  text: string = `　 ∧＿∧ 　
　（　´∀｀）
　（　　　　） 
　｜ ｜　| 
　（_＿）＿）`
) => {
  const key = generateKey();
  return {
    key: key,
    x: x,
    y: y,
    text: text
  };
};
const app = (state: ContentState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.CREATE_EMPTY: {
      const init: ContentState = getInitialState();
      return init;
    }
    case TypeKeys.CONTENT_SET_BLOCK: {
      const newBlock = action.block;
      console.log(newBlock);
      let res = state.res;
      for (let i = 0; i < res[0].blocks.length; i++) {
        if (res[0].blocks[i].key == newBlock.key) {
          res[0].blocks[i] = newBlock;
        }
      }
      console.log(res[0]);
      return { ...state, res: res };
    }
  }

  return state;
};

export default app;
