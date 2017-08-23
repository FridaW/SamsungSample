export const LOGIN_HIDE = "LOGIN_HIDE";

export function loginHide (term) {
    return {
        type: LOGIN_HIDE,
        payload: term
    }
}