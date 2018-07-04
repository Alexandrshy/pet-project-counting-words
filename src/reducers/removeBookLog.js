import { REMOVE_BOOK_LOG } from '../actions';

function reducer(state = [], action) {
    switch (action.type) {

        case REMOVE_BOOK_LOG:
            {
                const bookLog =  this.state.bookLog.filter((book) => book.id !== action.id );
                const listLogID =  this.state.listLogID.filter((item) => item !== action.id );
                
                return [ ...state.bookLog, bookLog];
            }

        default:
            return state;
    }
}

export default reducer;