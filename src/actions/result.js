export const SAVE_RESULT = 'SAVE_RESULT';

export function saveResult(result) {
    return {
        type: SAVE_RESULT,
        result
    }
}