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
    selectedItem: {
        allWords: string;
        author: string;
        id: string;
        language: string;
        level: string;
        text: string;
        textHTML: string;
        title: string;
        words: string;
    };
}}
type Action = SaveAction;

function reducer(state: State = {
    words: 0,
    symbols: 0,
    time: 0,
    speedReadingWords: 0,
    speedReadingSymbols: 0,
    selectedItem: {}
}, action: Action): State {
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