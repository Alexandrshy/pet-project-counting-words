import timerVisible from "../../src/reducers/timerVisible";
import { REF_TIMER_VISIBLE } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("timerVisible reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(timerVisible(state, action)).toEqual(false);
  });

  it("REF_TIMER_VISIBLE success", () => {
    const state = true;
    const action = {
      type: REF_TIMER_VISIBLE,
      timerVisible: true
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(timerVisible(state, action)).toEqual(true);
  });
});
