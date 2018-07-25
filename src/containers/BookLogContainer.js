// @flow

import { connect } from "react-redux";

import BookLog from "../components/ui/Book/BookLog";
import { removeBookLog, removeBookList, refBookNav } from "../actions";

const mapStateToProps = state => ({
  bookList: state.bookLog,
  navSelected: state.navBook,
  result: state.result
});

const mapDispatchToProps = dispatch => ({
  onRemoveBookLog: (id, book) => {
    dispatch(removeBookLog(id));
    dispatch(removeBookList(id));
    if (book.length <= 1) {
      dispatch(refBookNav("bookSearch"));
    }
  }
});

const BookLogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookLog);

export default BookLogContainer;
