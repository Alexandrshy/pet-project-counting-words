import navBook from "../../src/reducers/navBook";
import { REF_BOOK_NAV } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("navBook reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(navBook(state, action)).toEqual("bookSearch");
  });

  it("REF_BOOK_NAV success", () => {
    const state = "bookSearch";
    const action = {
      type: REF_BOOK_NAV,
      navBook: "bookLog"
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(navBook(state, action)).toEqual("bookLog");
  });
});
