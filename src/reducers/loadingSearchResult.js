// @flow

import { LOADING_SEARCH_RESULT } from '../actions';

type State = boolean;
type LoadingAction = { type: 'LOADING_SEARCH_RESULT', loadingSearchResult: boolean }
type Action = LoadingAction;

function reducer(state: State = false, action: Action): State {
    switch (action.type) {
        
        case LOADING_SEARCH_RESULT:
            return action.loadingSearchResult;

        default:
            return state;
    }
}

export default reducer;