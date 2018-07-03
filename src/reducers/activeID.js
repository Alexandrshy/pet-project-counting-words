import { REF_ACTIVE_TEXT_ID } from '../actions';

function reducer(state = '', action) {
    switch (action.type) {
        
        case REF_ACTIVE_TEXT_ID:
            return action.activeID;

        default:
            return state;
    }
}

export default reducer;