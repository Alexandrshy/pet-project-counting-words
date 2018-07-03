import { combineReducers } from 'redux';

import { default as fragments } from './fragments';
import { default as menu } from './menu';
import { default as timerRunning } from './timerRunning';
import { default as timerVisible } from './timerVisible';
import { default as activeID } from './activeID';
import { default as result } from './result';
import { default as emptySearchResult } from './emptySearchResult';

const reducer = combineReducers({
    fragments,
    menu,
    timerRunning,
    timerVisible,
    activeID,
    result,
    emptySearchResult
});

export default reducer;