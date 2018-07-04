import { combineReducers } from 'redux';

import { default as fragments } from './fragments';
import { default as menu } from './menu';
import { default as timerRunning } from './timerRunning';
import { default as timerVisible } from './timerVisible';
import { default as activeID } from './activeID';
import { default as result } from './result';
import { default as bookList } from './bookList';
import { default as emptySearchResult } from './emptySearchResult';
import { default as loadingSearchResult } from './loadingSearchResult';
import { default as navBook } from './navBook';

const reducer = combineReducers({
    fragments,
    menu,
    timerRunning,
    timerVisible,
    activeID,
    result,
    bookList,
    emptySearchResult,
    loadingSearchResult,
    navBook
});

export default reducer;