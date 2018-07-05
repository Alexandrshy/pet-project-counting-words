// @flow

import { REF_TIMER_RUNNING } from '../actions';

type State = boolean;
type RefAction = { type: 'REF_TIMER_RUNNING', timerRunning: boolean }
type Action = RefAction;

function reducer(state: State = false, action: Action): State {
    switch (action.type) {
        
        case REF_TIMER_RUNNING:
            return action.timerRunning;

        default:
            return state;
    }
}

export default reducer;