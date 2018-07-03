import { SAVE_RESULT } from '../actions';

function reducer(state = {}, action) {
    switch (action.type) {
        
        case SAVE_RESULT:
            return {
                ...state,
                ...action.result
            }

        default:
            return state;
    }
}

export default reducer;