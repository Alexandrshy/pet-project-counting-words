export const REF_BOOK_LIST = 'REF_BOOK_LIST';
export const ADD_BOOK_LOG = 'ADD_BOOK_LOG';
export const REMOVE_BOOK_LOG = 'REMOVE_BOOK_LOG';

export function refBookList(bookSearch) {
    return {
        type: REF_BOOK_LIST,
        bookSearch
    }
}

export function addBookLog(id) {
    return {
        type: ADD_BOOK_LOG,
        id
    }
}

export function removeBookLog(id) {
    return {
        type: REMOVE_BOOK_LOG,
        id
    }
}