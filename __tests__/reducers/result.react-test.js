import result from "../../src/reducers/result";
import { SAVE_RESULT } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("result reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(result(state, action)).toEqual({
      words: 0,
      symbols: 0,
      time: 0,
      speedReadingWords: 0,
      speedReadingSymbols: 0,
      selectedItem: {}
    });
  });

  it("SAVE_RESULT success", () => {
    const state = {
      words: 0,
      symbols: 0,
      time: 0,
      speedReadingWords: 0,
      speedReadingSymbols: 0,
      selectedItem: {}
    };
    const action = {
      type: SAVE_RESULT,
      result: {
        words: 100,
        symbols: 100,
        time: 10,
        speedReadingWords: 1000,
        speedReadingSymbols: 1000,
        selectedItem: {}
      }
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(result(state, action)).toEqual({
      words: 100,
      symbols: 100,
      time: 10,
      speedReadingWords: 1000,
      speedReadingSymbols: 1000,
      selectedItem: {}
    });
  });
});
