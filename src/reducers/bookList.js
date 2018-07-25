// @flow

import { REF_BOOK_LIST } from "../actions";

type State = Array<{
  id: string,
  title: string,
  authors: string,
  description: string,
  pageCount: string,
  imageLinks: string,
  inLog: boolean
}>;
type RefAction = {
  type: "REF_BOOK_LIST",
  bookSearch: Array<{
    id: string,
    title: string,
    authors: string,
    description: string,
    pageCount: string,
    imageLinks: string,
    inLog: boolean
  }>
};
type Action = RefAction;

function bookList(state: State = [], action: Action): State {
  switch (action.type) {
    case REF_BOOK_LIST:
      return action.bookSearch;

    default:
      return state;
  }
}

export default bookList;
