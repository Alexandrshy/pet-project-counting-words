import { REF_BOOK_LIST } from '../actions';

function reducer(state = [], action) {
    switch (action.type) {

        case REF_BOOK_LIST:
            return action.bookSearch;

        default:
            return state;
    }
}

export default reducer;