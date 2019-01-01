import { handleActions } from "redux-actions";
import { portSortAction } from "./actions";

const defaultState = {
    portfolioSort : 0
};

const p3Reducer = handleActions({
    [portSortAction]: (state, action) => {
        return {
            ...state,
            portfolioSort: action.payload.portfolioSort,
        }
    }
}, defaultState);

export default p3Reducer;
