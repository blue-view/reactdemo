import {ADD,MINUS} from './action-types'
export function counter(state=0,action){
    switch (action.type) {
        case ADD:
            return state+action.data;
        case MINUS:
             return state-action.data;
        default:
            return state    
            
    }
}