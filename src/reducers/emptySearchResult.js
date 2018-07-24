// @flow

import { REF_EMPTY_SEATCH_RESULT } from '../actions';

type State = boolean;
type Action = { type: 'REF_EMPTY_SEATCH_RESULT', emptySearchResult: boolean };

function emptySearchResult(state: State = false, action: Action): State {
  switch (action.type) {
    case REF_EMPTY_SEATCH_RESULT:
      return action.emptySearchResult;

    default:
      return state;
  }
}

export default emptySearchResult;
