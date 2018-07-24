// @flow

import { connect } from 'react-redux';

import BookSearch from '../components/ui/Book/BookSearch';

const mapStateToProps = state => (
  {
    navSelected: state.navBook,
  }
);

const BookSearchContainer = connect(mapStateToProps)(BookSearch);

export default BookSearchContainer;
