import { combineReducers } from 'redux';
import TermReducer from './reducer_fetchTerm';
import loginHideReducers from './reducer_loginHide'

const rootReducer = combineReducers({
    term: TermReducer,
    loginHideTerm: loginHideReducers
});

export default rootReducer;
