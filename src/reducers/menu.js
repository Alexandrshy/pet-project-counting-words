import { NAV_CHANGE } from '../actions';

function reducer(state = 'stopwatch', action) {
    switch (action.type) {
        
        case NAV_CHANGE:
            return action.menu;

        default:
            return state;
    }
}

export default reducer;