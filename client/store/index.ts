import {combineReducers, createStore, Dispatch, Store} from "redux";
import playerReducer, {PlayerActionType} from "./reducers/playerReducer";
import {Context, createWrapper, HYDRATE} from "next-redux-wrapper";
import {ThunkDispatch} from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";


export const rootReducer = combineReducers( {
    player: playerReducer
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count; // preserve count value on client side navigation
        return nextState;
    } else {
        return rootReducer;
    }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);
debugger

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = Dispatch<AllActions> & ThunkDispatch<RootState, void, AllActions>
export type InferActionsType<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never

export type AllActions = PlayerActionType