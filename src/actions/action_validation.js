import axios from 'axios';

export const VALIDATION = "VALIDATION";

export function validation(term) {
    console.log(term);
    return function(dispatch){
        axios.post(`/login`,term)
            .then(function(response){
                dispatch({
                    type: VALIDATION,
                    payload: response.data.check
                })
            })
    }
}
