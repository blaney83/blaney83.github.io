import { handleActions } from "redux-actions";
import { updateP5State } from "./actions";

const defaultState = {
    p5State : null
};

const p5Reducer = handleActions({
    [updateP5State]: (state, action) => {
        return {
            ...state,
            p5State: action.payload.p5State,
        }
    },

}, defaultState);

export default p5Reducer;
