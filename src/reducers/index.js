//take all reducers make single reducer 

import {combineReducers} from 'redux'; 
import clockReducer from './clock_reducer'; 

const rootReducer = combineReducers({
    clock: clockReducer
}); 

export default rootReducer; 