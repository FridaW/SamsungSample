import { combineReducers } from 'redux';
import TermReducer from './reducer_fetchTerm'

const rootReducer = combineReducers({
  term: TermReducer
});

export default rootReducer;
