// @flow

import { SAVE_RESULT } from '../actions';

type State = {
    words: number;
    symbols: number;
    time: number;
    speedReadingWords: number;
    speedReadingSymbols: number;
    selectedItem: {};
};
type SaveAction = { type: 'SAVE_RESULT', result: {
    words: number;
    symbols: number;
    time: number;
    speedReadingWords: number;
    speedReadingSymbols: number;
    selectedItem: {};
}}
type Action = SaveAction;

function reducer(state: State = {}, action: Action): State {
    switch (action.type) {
        
        case SAVE_RESULT:
            return {
                ...state,
                ...action.result
            }

        default:
            return state;
    }
}

export default reducer;