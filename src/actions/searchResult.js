// @flow

export const REF_EMPTY_SEATCH_RESULT = 'REF_EMPTY_SEATCH_RESULT';
export const LOADING_SEARCH_RESULT = 'LOADING_SEARCH_RESULT';

export function fefEmptySearchResult(emptySearchResult: boolean) {
    return {
        type: REF_EMPTY_SEATCH_RESULT,
        emptySearchResult
    }
}

export function refLoadingSearchResult(loadingSearchResult: boolean) {
    return {
        type: LOADING_SEARCH_RESULT,
        loadingSearchResult
    }
}
