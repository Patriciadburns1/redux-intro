// action function that creates an object 
import types from './types';

export function tick( now ){
    return {
        type: types.UPDATE_TIME, 
        currentTime: now
    }
}