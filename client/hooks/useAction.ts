import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {playerActions} from "../store/reducers/playerReducer";
import {AppDispatch} from "../store";

const ActionCreators = {
    ...playerActions
}

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    return bindActionCreators(ActionCreators, dispatch)
}