import {CLEAR_CURRENT_PROFILE} from "../actions/types";
import {PROFILE_LOADING} from "../actions/types";
import {GET_PROFILES} from "../actions/types";
import {GET_PROFILE} from "../actions/types";
import {PROFILE_NOT_FOUND} from "../actions/types";

const initialState = {
    profile: null,
    profiles: null,
    loading: false,

};

export default function (state = initialState, action) {
    if (action.type === GET_PROFILE) {
        return {
            ...state,
            profile: action.payload,
            loading: false
        }
    } else if (action.type === GET_PROFILES) {
        return {
            ...state,
            profiles: action.payload,
            loading: false
        }
    } else if (action.type === PROFILE_LOADING) {
        return {
            ...state,
            loading: true
        }

    } else if (action.type === CLEAR_CURRENT_PROFILE) {
        return {
            ...state,
            loading: false,
            profile: null
        }
    } else if (action.type === PROFILE_NOT_FOUND) {

    }
    return state
}