import { LOADING_SEARCH_RESULT } from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        
        case LOADING_SEARCH_RESULT:
            return action.loadingSearchResult;

        default:
            return state;
    }
}

export default reducer;