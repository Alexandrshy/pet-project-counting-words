// @flow

import { REF_TIMER_VISIBLE } from '../actions';

type State = boolean;
type RefAction = { type: 'REF_TIMER_VISIBLE', timerVisible: boolean }
type Action = RefAction;

function reducer(state: State = false, action: Action): State {
    switch (action.type) {
        
        case REF_TIMER_VISIBLE:
            return action.timerVisible;

        default:
            return state;
    }
}

export default reducer;