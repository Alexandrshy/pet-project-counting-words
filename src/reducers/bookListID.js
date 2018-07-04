import { ADD_BOOK_LIST_ID, REMOVE_BOOK_LIST_ID } from '../actions';

function reducer(state = [], action) {
    switch (action.type) {

        case ADD_BOOK_LIST_ID:
            {  
                const listLogID = [ ...state, action.id]

                return listLogID;
            }
        
        case REMOVE_BOOK_LIST_ID:
            {
                const listLogID = state.filter((item) => item !== action.id );
                
                return listLogID;
            }

        default:
            return state;
    }
}

export default reducer;