export const REF_TIMER_RUNNING = 'REF_TIMER_RUNNING';
export const REF_TIMER_VISIBLE = 'REF_TIMER_VISIBLE';

export function refTimerRunning(timerRunning) {
    return {
        type: REF_TIMER_RUNNING,
        timerRunning
    }
}

export function refTimerVisible(timerVisible) {
    return {
        type: REF_TIMER_VISIBLE,
        timerVisible
    }
}