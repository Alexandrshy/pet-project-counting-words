export const REF_BOOK_LIST = 'REF_BOOK_LIST';
export const ADD_BOOK_LIST_ID = 'ADD_BOOK_LIST_ID';
export const REMOVE_BOOK_LIST_ID = 'REMOVE_BOOK_LIST_ID';
export const ADD_BOOK_LOG = 'ADD_BOOK_LOG';
export const REMOVE_BOOK_LOG = 'REMOVE_BOOK_LOG';

export function refBookList(bookSearch) {
    return {
        type: REF_BOOK_LIST,
        bookSearch
    }
}

export function addBookList(id) {
    return {
        type: ADD_BOOK_LIST_ID,
        id
    }
}

export function removeBookList(id) {
    return {
        type: REMOVE_BOOK_LIST_ID,
        id
    }
}

export function addBookLog(id, books) {
    return {
        type: ADD_BOOK_LOG,
        id,
        books
    }
}

export function removeBookLog(id) {
    return {
        type: REMOVE_BOOK_LOG,
        id
    }
}