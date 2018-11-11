import { TypeKeys, ActionTypes } from "../actions/index";

interface ContentState {
  row: number;
  splits: number[];
  blocks: Block[];
}
interface Block {
  x: number;
  y: number;
  text: string;
}

const getInitialState = () => {
  return {
    row: 10,
    splits: [5],
    blocks: [getInitialBlock()]
  };
};

const getInitialBlock = (
  x: number = 2,
  y: number = 0,
  text: string = `　 ∧＿∧ 　
　（　´∀｀）
　（　　　　） 
　｜ ｜　| 
　（_＿）＿）`
) => {
  return {
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
  }

  return state;
};

export default app;
