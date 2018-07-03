import types from '../actions/types'; 

const DEFAULT_STATE={
    userName:'Guest'
}

export default (state=DEFAULT_STATE, action) => {

console.log("user reducer", action); 
    switch(action.type){
        default:
        return state; 
    }
}