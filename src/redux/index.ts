import { combineReducers, Reducer } from "@reduxjs/toolkit";
import counterReducer, {CounerState} from "./counterSlice"

export interface RootState {
    counter: CounerState
}

export const packageReducer: Reducer<RootState> = combineReducers({
    counter: counterReducer
})