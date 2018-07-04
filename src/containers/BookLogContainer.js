import { connect } from 'react-redux';

import BookLog from '../components/ui/Book/BookLog';
import { removeBookLog, removeBookList } from '../actions';

const mapStateToProps = state => {

    return {
        bookList: state.bookLog,
        navSelected: state.navBook,
        result: state.result,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveBookLog: (id) => {
            dispatch(removeBookLog(id));
            dispatch(removeBookList(id));
        }
    }
}

const BookLogContainer = connect(mapStateToProps, mapDispatchToProps)(BookLog);

export default BookLogContainer;