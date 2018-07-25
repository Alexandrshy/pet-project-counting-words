import timerRunning from "../../src/reducers/timerRunning";
import { REF_TIMER_RUNNING } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("timerRunning reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(timerRunning(state, action)).toEqual(false);
  });

  it("REF_TIMER_RUNNING success", () => {
    const state = true;
    const action = {
      type: REF_TIMER_RUNNING,
      timerRunning: true
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(timerRunning(state, action)).toEqual(true);
  });
});
