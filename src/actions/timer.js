// @flow

export const REF_TIMER_RUNNING = 'REF_TIMER_RUNNING';
export const REF_TIMER_VISIBLE = 'REF_TIMER_VISIBLE';

export function refTimerRunning(timerRunning: boolean) {
    return {
        type: REF_TIMER_RUNNING,
        timerRunning
    }
}

export function refTimerVisible(timerVisible: boolean) {
    return {
        type: REF_TIMER_VISIBLE,
        timerVisible
    }
}