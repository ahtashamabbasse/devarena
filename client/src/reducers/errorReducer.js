import {GET_ERRORS} from "../actions/types";

const initialState = {
    isAuthorized: false,
    user: {}
};

export default function (state = initialState, action) {
    if (action.type === GET_ERRORS) {
        return action.payload
    } else {
        return state
    }
}