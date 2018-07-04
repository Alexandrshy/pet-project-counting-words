import { connect } from 'react-redux';

import BookList from '../components/ui/BookList/BookList';
import { } from '../actions';

const mapStateToProps = state => {
    return {
        books: state.bookSearch,
        listLogID: state.listLogID,
        emptyResult: state.emptySearchResult
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddBookLog: (id) => {
            dispatch(addBookLog(id));
            // dispatch(addListLog(id));
        },
        onRemoveBookLog: (item) => {
            // dispatch(removeBookLog(item));
            // dispatch(removeListLog(id));
        },
        onNavClick: (activeNav) => {
            dispatch(navBook(activeNav));
        }
    }
}


const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;