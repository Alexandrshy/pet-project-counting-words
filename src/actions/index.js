export const NAV_CHANGE = 'NAV_CHANGE';
export const SAVE_RESULT = 'SAVE_RESULT';
export const REF_TIMER_RUNNING = 'REF_TIMER_RUNNING';
export const REF_TIMER_VISIBLE = 'REF_TIMER_VISIBLE';
export const REF_ACTIVE_TEXT_ID = 'REF_ACTIVE_TEXT_ID';

export function navChange(name) {
    return {
        type: NAV_CHANGE
        name
    }
}

export function refTimerRunning(item) {
    return {
        type: REF_TIMER_RUNNING
        item
    }
}

export function refTimerVisible(item) {
    return {
        type: REF_TIMER_VISIBLE
        item
    }
}

export function refActiveTextID(activeTextID) {
    return {
        type: REF_ACTIVE_TEXT_ID
        activeTextID
    }
}