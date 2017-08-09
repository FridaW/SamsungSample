export const FETCH_TERM = 'FETCH_TERM';

export function fetchTerm (term) {
    return {
        type: FETCH_TERM,
        payload: term
    }
}