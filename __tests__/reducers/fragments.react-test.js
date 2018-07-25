import fragments from "../../src/reducers/fragments";

describe("fragments reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(fragments(state, action)).toEqual([]);
  });
});
