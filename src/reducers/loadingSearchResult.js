// @flow

import { LOADING_SEARCH_RESULT } from '../actions';

type State = boolean;
type Action = { type: 'LOADING_SEARCH_RESULT', loadingSearchResult: boolean };

function loadingSearchResult(state: State = false, action: Action): State {
  switch (action.type) {
    case LOADING_SEARCH_RESULT:
      return action.loadingSearchResult;

    default:
      return state;
  }
}

export default loadingSearchResult;
