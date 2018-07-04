import { ADD_BOOK_LOG } from '../actions';

function reducer(state = [], action) {
    switch (action.type) {

        case ADD_BOOK_LOG:
            {
                const book = this.state.bookSearch.filter((book) => book.id === action.id);
                const bookLog = [...this.state.bookLog, book[0]];

                return [...state.bookLog, bookLog];
            }

        default:
            return state;
    }
}

export default reducer;