import emptySearchResult from "../../src/reducers/emptySearchResult";
import { REF_EMPTY_SEATCH_RESULT } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("emptySearchResult reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(emptySearchResult(state, action)).toEqual(false);
  });

  it("REF_EMPTY_SEATCH_RESULT success", () => {
    const state = true;
    const action = {
      type: REF_EMPTY_SEATCH_RESULT,
      emptySearchResult: true
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(emptySearchResult(state, action)).toEqual(true);
  });
});
