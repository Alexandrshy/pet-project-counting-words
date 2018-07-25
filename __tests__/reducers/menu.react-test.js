import menu from "../../src/reducers/menu";
import { NAV_CHANGE } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("menu reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(menu(state, action)).toEqual("stopwatch");
  });

  it("NAV_CHANGE success", () => {
    const state = "stopwatch";
    const action = {
      type: NAV_CHANGE,
      menu: "list"
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(menu(state, action)).toEqual("list");
  });
});
