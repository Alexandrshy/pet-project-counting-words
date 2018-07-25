import loadingSearchResult from "../../src/reducers/loadingSearchResult";
import { LOADING_SEARCH_RESULT } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("loadingSearchResult reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(loadingSearchResult(state, action)).toEqual(false);
  });

  it("LOADING_SEARCH_RESULT success", () => {
    const state = false;
    const action = {
      type: LOADING_SEARCH_RESULT,
      loadingSearchResult: true
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(loadingSearchResult(state, action)).toEqual(true);
  });
});
