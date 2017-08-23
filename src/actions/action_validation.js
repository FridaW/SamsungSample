export const VALIDATION = "VALITDATION";

export function validation(term) {
    console.log(term);
    return{
        type: VALIDATION,
        payload: term
    }
}
