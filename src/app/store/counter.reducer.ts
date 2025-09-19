import { createReducer, on } from "@ngrx/store";
import { increment, decrement } from "./counter.actions";
const initialState=0;
export const counterReducer= createReducer(
    initialState,
    on(increment, (state, action)=>state+action.value) ,
    on(decrement, (state, action)=>state-action.value)
);

// export function counterReducer(state= initialState, action:any){
//     if(action.type==='[Counter] Increment'){
//         return state+action.value;
//     }
//     if(action.type==='[Counter] Decrement'){
//         return state-action.value;
//     }
//     return state; // if the action is not matched we have to return the current state
// }