// @flow

import { ADD_BOOK_LIST_ID, REMOVE_BOOK_LIST_ID } from "../actions";

type State = Array<string>;
type AddAction = { type: "ADD_BOOK_LIST_ID", id: string };
type RemoveAction = { type: "REMOVE_BOOK_LIST_ID", id: string };
type Action = AddAction | RemoveAction;

function listLogID(state: State = [], action: Action): State {
  switch (action.type) {
    case ADD_BOOK_LIST_ID: {
      const listLog = [...state, action.id];
      return listLog;
    }

    case REMOVE_BOOK_LIST_ID: {
      const listLog = state.filter((item: string) => item !== action.id);
      return listLog;
    }

    default:
      return state;
  }
}

export default listLogID;
