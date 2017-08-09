import { FETCH_TERM } from '../actions/action_fetchTerm';

export default function (state={}, action) {
    switch (action.type) {
        case FETCH_TERM:
            return { term: action.payload }
    }
    return state;
}
