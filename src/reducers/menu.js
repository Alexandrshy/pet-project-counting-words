// @flow

import { NAV_CHANGE } from "../actions";

type State = string;
type Action = { type: "NAV_CHANGE", menu: string };

function menu(state: State = "stopwatch", action: Action): State {
  switch (action.type) {
    case NAV_CHANGE:
      return action.menu;

    default:
      return state;
  }
}

export default menu;
