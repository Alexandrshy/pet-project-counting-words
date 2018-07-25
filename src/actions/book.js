// @flow

export const REF_BOOK_LIST = "REF_BOOK_LIST";
export const ADD_BOOK_LIST_ID = "ADD_BOOK_LIST_ID";
export const REMOVE_BOOK_LIST_ID = "REMOVE_BOOK_LIST_ID";
export const ADD_BOOK_LOG = "ADD_BOOK_LOG";
export const REMOVE_BOOK_LOG = "REMOVE_BOOK_LOG";

export function refBookList(
  bookSearch: Array<{
    id: string,
    title: string,
    authors: string,
    description: string,
    pageCount: string,
    imageLinks: string,
    inLog: boolean
  }>
) {
  return {
    type: REF_BOOK_LIST,
    bookSearch
  };
}

export function addBookList(id: string) {
  return {
    type: ADD_BOOK_LIST_ID,
    id
  };
}

export function removeBookList(id: string) {
  return {
    type: REMOVE_BOOK_LIST_ID,
    id
  };
}

export function addBookLog(
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
) {
  return {
    type: ADD_BOOK_LOG,
    id,
    books
  };
}

export function removeBookLog(id: string) {
  return {
    type: REMOVE_BOOK_LOG,
    id
  };
}
