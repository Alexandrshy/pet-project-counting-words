import { REF_TIMER_VISIBLE } from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        
        case REF_TIMER_VISIBLE:
            return action.timerVisible;

        default:
            return state;
    }
}

export default reducer;