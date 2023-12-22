import { combineReducers, Reducer } from "@reduxjs/toolkit";
import counterReducer, {CounerState} from "./slices/counterSlice"

export interface RootState {
    counter: CounerState
}

export const packageReducer: Reducer<RootState> = combineReducers({
    counter: counterReducer
})