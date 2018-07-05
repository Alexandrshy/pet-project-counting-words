// @flow

import { REMOVE_BOOK_LOG } from '../actions';

type State = Array<{
    id: string;
    title: string;
    authors: string;
    description: string;
    pageCount: string;
    imageLinks: string;
    inLog: boolean;
}>;
type RefAction = { type: 'REMOVE_BOOK_LOG', bookLog: Array<{
    id: string;
    title: string;
    authors: string;
    description: string;
    pageCount: string;
    imageLinks: string;
    inLog: boolean;
}> }
type Action = RefAction;

function reducer(state: State = [], action: Action): State {
    switch (action.type) {

        case REMOVE_BOOK_LOG:
            {
                
            console.log('19', state, '8', action);
                const bookLog =  this.state.bookLog.filter((book) => book.id !== action.id );
                const listLogID =  this.state.listLogID.filter((item) => item !== action.id );
                
                return [ ...state.bookLog, bookLog];
            }

        default:
            return state;
    }
}

export default reducer;