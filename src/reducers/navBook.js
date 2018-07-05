// @flow

import { REF_BOOK_NAV } from '../actions';

type State = string;
type RefAction = { type: 'REF_BOOK_NAV', navBook: string }
type Action = RefAction;

function reducer(state: State = 'bookSearch', action: Action): State {
    switch (action.type) {

        case REF_BOOK_NAV:
            return action.navBook;

        default:
            return state;
    }
}

export default reducer;