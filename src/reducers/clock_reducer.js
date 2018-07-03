import types from '../actions/types'; 

const DEFAULT_STATE = {  
    time: new Date().toLocaleTimeString(),
    // date: new Date().toLocaleDateString()
    header: 'The Time is ...'
}; 



// no break points because of the return statement 
//dispatch an action call the action creator 
//what is returned out of reducer is the state for the clock property 
// you have to build whatever you want state to be when you return it
// best practice deconstruct original state and reset whichever property you need to 
function clockReducer(state=DEFAULT_STATE, action){

console.log("clock reducer", action); 
    switch(action.type){
        case types.UPDATE_TIME:
            return {...state, time: action.currentTime };
        default: 
            return state; 
    }
}

export default clockReducer; 