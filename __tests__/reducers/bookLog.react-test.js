import bookLog from "../../src/reducers/bookLog";
import { ADD_BOOK_LOG, REMOVE_BOOK_LOG } from "../../src/actions";
import deepFreeze from "deep-freeze";

describe("bookLog reducer", () => {
  it("Has a default state", () => {
    const state = undefined;
    const action = {
      type: "unexpected"
    };
    expect(bookLog(state, action)).toEqual([]);
  });

  it("ADD_BOOK_LOG success", () => {
    const state = [
      {
        id: "0ff0c770-3198-495d-aff1-8e4ee41197fb",
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        description: "",
        pageCount: "510",
        imageLinks: "",
        inLog: false
      }
    ];
    const action = {
      type: ADD_BOOK_LOG,
      id: "1",
      books: [
        {
          id: "1",
          title: "Test title",
          author: "Test author",
          description: "Test desc",
          pageCount: "100",
          imageLinks: "testLinks",
          inLog: true
        }
      ]
    };
    // deepFreeze(state);
    // deepFreeze(action);
    expect(bookLog(state, action)).toEqual([
      {
        id: "0ff0c770-3198-495d-aff1-8e4ee41197fb",
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        description: "",
        pageCount: "510",
        imageLinks: "",
        inLog: false
      },
      {
        id: "1",
        title: "Test title",
        author: "Test author",
        description: "Test desc",
        pageCount: "100",
        imageLinks: "testLinks",
        inLog: true
      }
    ]);
  });

  // it("REMOVE_BOOK_LOG success", () => {
  //   const state = ;
  //   const action = {
  //     type: REMOVE_BOOK_LOG,
  //     bookListLog:
  //   };
  //   deepFreeze(state);
  //   deepFreeze(action);
  //   expect(bookLog(state, action)).toEqual();
  // });
});
