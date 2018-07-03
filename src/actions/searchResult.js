export const REF_EMPTY_SEATCH_RESULT = 'REF_EMPTY_SEATCH_RESULT';
export const LOADING_SEARCH_RESULT = 'LOADING_SEARCH_RESULT';

export function fefEmptySearchResult(emptySearchResult) {
    return {
        type: REF_EMPTY_SEATCH_RESULT,
        emptySearchResult
    }
}

export function refLoadingSearchResult(loadingSearchResult) {
    return {
        type: LOADING_SEARCH_RESULT,
        loadingSearchResult
    }
}
