import { connect } from 'react-redux';

import BookNavPanel from '../components/ui/Book/BookNavPanel';
import { refBookNav } from '../actions';

const mapStateToProps = state => {

    return {
        navSelected: state.navBook,
        bookLog: state.bookLog
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNavClick: (activeNav) => {
            dispatch(refBookNav(activeNav));
        }
    }
}


const BookNavPanelContainer = connect(mapStateToProps, mapDispatchToProps)(BookNavPanel);

export default BookNavPanelContainer;