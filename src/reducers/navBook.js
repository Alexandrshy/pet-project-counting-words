import { REF_BOOK_NAV } from '../actions';

function reducer(state = 'bookSearch', action) {
    switch (action.type) {

        case REF_BOOK_NAV:
            return action.navBook;

        default:
            return state;
    }
}

export default reducer;