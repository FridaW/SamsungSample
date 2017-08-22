import { LOGIN_HIDE } from '../actions/action_loginHide';

export default function (state={}, action) {
    switch (action.type) {
        case LOGIN_HIDE:
            return { loginHide: action.payload }
    }
    return state;
}
