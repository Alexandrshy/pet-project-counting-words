// @flow

import { ADD_BOOK_LOG, REMOVE_BOOK_LOG } from "../actions";

type State = Array<{
  id: string,
  title: string,
  authors: string,
  description: string,
  pageCount: string,
  imageLinks: string,
  inLog: boolean
}>;
type AddAction = {
  type: "ADD_BOOK_LOG",
  id: string,
  books: Array<{
    id: string,
    title: string,
    authors: string,
    description: string,
    pageCount: string,
    imageLinks: string,
    inLog: boolean
  }>
};
type RemoveAction = { type: "REMOVE_BOOK_LOG", id: string };
type Action = AddAction | RemoveAction;

function bookLog(state: State = [], action: Action): State {
  switch (action.type) {
    case ADD_BOOK_LOG: {
      const book = action.books.filter(bookItem => bookItem.id === action.id);
      const bookListLog = [...state, book[0]];
      return bookListLog;
    }

    // case REMOVE_BOOK_LOG: {
    //   const bookListLog = state.filter(bookItem => bookItem.id !== action.id);
    //   return bookListLog;
    // }

    default:
      return state;
  }
}

export default bookLog;
