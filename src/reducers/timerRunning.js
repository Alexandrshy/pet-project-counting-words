import { REF_TIMER_RUNNING } from '../actions';

function reducer(state = false, action) {
    switch (action.type) {
        
        case REF_TIMER_RUNNING:
            return action.timerRunning;

        default:
            return state;
    }
}

export default reducer;