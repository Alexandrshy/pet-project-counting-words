import { NAV_CHANGE, SAVE_RESULT, REF_TIMER_RUNNING, REF_TIMER_VISIBLE, REF_ACTIVE_TEXT_ID } from '../actions';

export default reducer(state = {}, actions) {
    switch (actions.type) {

        case NAV_CHANGE:
            return {
                ...state,
                navSelected: actions.name
            }
        
        // case SAVE_RESULT:
        //     return {
        //         prevState => ({
        //             result: {
        //                 ...prevState.result,
        //                 ...action.data
        //             }
        //         })
        //     }
        
        case REF_TIMER_RUNNING:
            return {
                ...state,
                timerRunning: action.item
            }
        
        case REF_TIMER_VISIBLE:
            return return {
                ...state,
                timerVisible: action.item
            }
        
        case REF_ACTIVE_TEXT_ID:
            return {
                ...state,
                activeTextID: action.activeTextID
            }
        

        default:
            return state;
    }
}