import { ActionTypes } from "../actions/index";

interface EditorState {}

const getInitialState = () => {
  return {};
};

const app = (state: EditorState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
  }

  return state;
};

export default app;
