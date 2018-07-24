// @flow

import { REF_ACTIVE_TEXT_ID } from '../actions';

type State = string;
type Action = { type: 'REF_ACTIVE_TEXT_ID', activeID: string };

function activeID(state: State = '', action: Action): State {
  switch (action.type) {
    case REF_ACTIVE_TEXT_ID:
      return action.activeID;

    default:
      return state;
  }
}

export default activeID;
