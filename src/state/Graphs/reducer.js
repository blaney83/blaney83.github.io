import { handleActions } from "redux-actions";
import { updateGraph } from "./actions";

const defaultState = {
    currentGraph : 0
};

const graphReducer = handleActions({
    [updateGraph]: (state, action) => {
        return {
            ...state,
            currentGraph: action.payload.currentGraph,
        }
    }
}, defaultState);

export default graphReducer;
