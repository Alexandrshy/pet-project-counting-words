import { ADD_BOOK_LOG, REMOVE_BOOK_LOG } from '../actions';

function reducer(state = [], action) {
    switch (action.type) {

        case ADD_BOOK_LOG:
            {  
                const book = action.books.filter((book) => book.id === action.id);
                const bookListLog = [...state, book[0]];

                return bookListLog;
            }
        
        case REMOVE_BOOK_LOG:
            {
                const bookListLog =  state.filter((book) => book.id !== action.id );
                
                return bookListLog;
            }

        default:
            return state;
    }
}

export default reducer;