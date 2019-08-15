import {CLEAR_ERRORS, GET_ERRORS} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    if (action.type === GET_ERRORS) {
        return action.payload
    } else if (action.type === CLEAR_ERRORS) {
        return {}
    } else {
        return state
    }
}