// @flow

type State = Array<{
  id: string;
  title: string;
  authors: string;
  description: string;
  pageCount: string;
  imageLinks: string;
  inLog: boolean;
}>
type Action = { type: string }

function fragments(state: State = [], action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
}

export default fragments;
