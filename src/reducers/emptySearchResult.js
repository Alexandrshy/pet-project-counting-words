import { REF_EMPTY_SEATCH_RESULT } from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        
        case REF_EMPTY_SEATCH_RESULT:
            return action.emptySearchResult;

        default:
            return state;
    }
}

export default reducer;