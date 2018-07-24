// @flow

import { REF_TIMER_VISIBLE } from '../actions';

type State = boolean;
type Action = { type: 'REF_TIMER_VISIBLE', timerVisible: boolean };

function timerVisible(state: State = false, action: Action): State {
  switch (action.type) {
    case REF_TIMER_VISIBLE:
      return action.timerVisible;

    default:
      return state;
  }
}

export default timerVisible;
