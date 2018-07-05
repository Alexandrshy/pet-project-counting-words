// @flow

import { connect } from 'react-redux';

import BookSearch from '../components/ui/Book/BookSearch';

const mapStateToProps = state => {

    return {
        navSelected: state.navBook
    }
}

const BookSearchContainer = connect(mapStateToProps)(BookSearch);

export default BookSearchContainer;