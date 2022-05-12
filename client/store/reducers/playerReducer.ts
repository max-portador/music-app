import {ITrack} from "../../types/track";
import {InferActionsType} from "../index";

const initialState = {
    active: null as null | ITrack,
    volume: 50,
    currentTime: 0,
    duration: 0,
    pause: true
}

export const playerReducer = (state = initialState, action: PlayerActionType): PlayerState => {
    switch (action.type){
        case PlayerActionTypesEnum.PLAY:
            return {...state, pause: false }
        case PlayerActionTypesEnum.PAUSE:
            return {...state, pause: true}
        case PlayerActionTypesEnum.SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case PlayerActionTypesEnum.SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}
        case PlayerActionTypesEnum.SET_DURATION:
            return {...state, duration: action.payload}
        case PlayerActionTypesEnum.SET_VOLUME:
            return {...state, volume: action.payload}
        default:
            return state
    }
}

export const playerActions = {
    playTrack: () => ({
        type: PlayerActionTypesEnum.PLAY
    } as const ),

    pauseTrack: () => ({
        type: PlayerActionTypesEnum.PAUSE
    } as const ),

    setActive: (track: ITrack) => ({
        type: PlayerActionTypesEnum.SET_ACTIVE,
        payload: track
    } as const ),

    setCurrentTime: (time: number) => ({
        type: PlayerActionTypesEnum.SET_CURRENT_TIME,
        payload: time
    } as const ),

    setDuration: (val: number) => ({
        type: PlayerActionTypesEnum.SET_DURATION,
        payload: val
    } as const ),

    setVolume: (val: number) => ({
        type: PlayerActionTypesEnum.SET_VOLUME,
        payload: val
    } as const ),
}

export default playerReducer;

type PlayerState = typeof initialState
export type PlayerActionType = InferActionsType<typeof playerActions>
export enum PlayerActionTypesEnum {
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_CURRENT_TIME ="SET_CURRENT_TIME",
    SET_ACTIVE ="SET_ACTIVE",
    SET_DURATION = "SET_DURATION",
    SET_VOLUME = "SET_VOLUME",
}


