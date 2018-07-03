import { connect } from 'react-redux';

import MainBook from '../components/ui/MainBook/MainBook';
import {  } from '../actions';

const mapStateTopProps = state => {
    return {
        bookSearch: state.bookSearch,
        bookLog: state.bookLog,
        listLogID: state.listLogID,
        navSelected: state.navSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const MainBookContainer = connect(mapStateTopProps, mapDispatchToProps)(MainBook);

export default MainBookContainer;