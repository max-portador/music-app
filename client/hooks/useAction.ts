import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {playerActions} from "../store/reducers/playerReducer";
import {AppDispatch} from "../store";
import {deleteTrack, searchTrack} from "../store/reducers/trackReducer";

const ActionCreators = {
    ...playerActions,
    deleteTrack,
    searchTrack,
}

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(ActionCreators, dispatch)
}