import { handleActions } from "redux-actions";
import { updateScroll, updateAnchor } from "./actions";

const defaultState = {
    distanceScrolled : 0,
    anchorEl : null,
    anchorMessage : null
};

const portfolioReducer = handleActions({
    [updateScroll]: (state, action) => {
        return {
            ...state,
            updateScroll: action.payload.scrollValue,
        }
    },
    [updateAnchor]: (state, action) => {
        return {
            ...state,
            anchorEl: action.payload.anchorEl,
            anchorMessage: action.payload.anchorMessage
        }
    },
}, defaultState);

export default portfolioReducer;
