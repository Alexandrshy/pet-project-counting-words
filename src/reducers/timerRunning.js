// @flow

import { REF_TIMER_RUNNING } from '../actions';

type State = boolean;
type Action = { type: 'REF_TIMER_RUNNING', timerRunning: boolean };

function timerRunning(state: State = false, action: Action): State {
  switch (action.type) {
    case REF_TIMER_RUNNING:
      return action.timerRunning;

    default:
      return state;
  }
}

export default timerRunning;
