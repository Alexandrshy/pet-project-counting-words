import { connect } from 'react-redux';

import SearchForm from '../components/ui/SearchForm/SearchForm';
import { refLoadingSearchResult, refBookList, fefEmptySearchResult } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        updateBookList: (book) => {
            if (book.length) {
                dispatch(fefEmptySearchResult(false));
                dispatch(refBookList(book));
            } else {
                dispatch(fefEmptySearchResult(true));
            }
        },
        updateStatusLoading: (status) => {
            dispatch(refLoadingSearchResult(status));
        }
    }
}

const SearchFormContainer = connect(null, mapDispatchToProps)(SearchForm);

export default SearchFormContainer