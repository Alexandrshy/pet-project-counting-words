// @flow

import { REF_ACTIVE_TEXT_ID } from '../actions';

type State = string;
type RefAction = { type: 'REF_ACTIVE_TEXT_ID', activeID: string }
type Action = RefAction;

function reducer(state: State = '', action: Action): State {
    switch (action.type) {
        
        case REF_ACTIVE_TEXT_ID:
            return action.activeID;

        default:
            return state;
    }
}

export default reducer;