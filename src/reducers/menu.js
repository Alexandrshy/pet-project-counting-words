// @flow

import { NAV_CHANGE } from '../actions';

type State = string;
type NavAction = { type: 'NAV_CHANGE', menu: string }
type Action = NavAction;

function reducer(state: State = 'stopwatch', action: Action): State {
    switch (action.type) {
        
        case NAV_CHANGE:
            return action.menu;

        default:
            return state;
    }
}

export default reducer;