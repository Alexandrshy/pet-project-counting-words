// @flow

import { connect } from 'react-redux';

import BookList from '../components/ui/Book/BookList';
import {
  addBookLog,
  removeBookLog,
  refBookNav,
  addBookList,
  removeBookList,
} from '../actions';

const mapStateToProps = state => (
  {
    books: state.bookList,
    listLogID: state.listLogID,
    emptyResult: state.emptySearchResult,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onAddBookLog: (id, books) => {
      dispatch(addBookLog(id, books));
      dispatch(addBookList(id));
    },
    onRemoveBookLog: (id) => {
      dispatch(removeBookLog(id));
      dispatch(removeBookList(id));
    },
    onNavClick: (activeNav) => {
      dispatch(refBookNav(activeNav));
    },
  }
);


const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
