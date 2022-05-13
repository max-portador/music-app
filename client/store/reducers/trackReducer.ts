import {ITrack} from "../../types/track";
import {InferActionsType} from "../index";
import {Dispatch} from "redux";
import trackAPI from "../../api/trackAPI";

const initialState = {
    tracks: [] as ITrack[],
    errorMessage: '',
}


export const trackReducer = (state = initialState, action: TrackActionType): TrackState => {
    switch (action.type) {
        case TrackActionTypesEnum.FETCH_TRACKS:
            return {
                errorMessage: '',
                tracks: action.payload
            }
        case TrackActionTypesEnum.FETCH_TRACKS_ERROR:
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const trackActions = {
    setTracks: (tracks: ITrack[]) => ({
        type: TrackActionTypesEnum.FETCH_TRACKS, payload: tracks
    } as const),
    setTracksFetchErrorMessage: (error: string) => ({
        type: TrackActionTypesEnum.FETCH_TRACKS_ERROR, payload: error
    } as const),
}

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackActionType>) => {
        try {
            const tracks = await trackAPI.fetchTrackList()
            dispatch(trackActions.setTracks(tracks))
        }
        catch (e) {
            dispatch(trackActions.setTracksFetchErrorMessage('Произошла ошибка при загрузке треков'))
        }
    }
}

export default trackReducer



export type TrackState = typeof initialState
export enum TrackActionTypesEnum {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR'
}
export type TrackActionType = InferActionsType<typeof trackActions>
