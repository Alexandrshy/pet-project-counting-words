// @flow

import { REF_BOOK_NAV } from '../actions';

type State = string;
type Action = { type: 'REF_BOOK_NAV', navBook: string };

function navBook(state: State = 'bookSearch', action: Action): State {
  switch (action.type) {
    case REF_BOOK_NAV:
      return action.navBook;

    default:
      return state;
  }
}

export default navBook;
