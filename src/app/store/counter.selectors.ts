import { createSelector } from "@ngrx/store";

export const selectCount=( state:{counter:number})=>state.counter; // selector function which takes the whole state and returns the part of the state we are interested in
export const selectDoubleCount= createSelector(
    selectCount,
    (state)=>state*2    
)