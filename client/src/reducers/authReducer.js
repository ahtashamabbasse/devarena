import {SET_CURRENT_USER} from './../actions/types'
import isEmpty from './../validations/isEmpty'

const initialState = {
    isAuthorized: false,
    user: {}
};

export default function (state = initialState, action) {
    if (action.type===SET_CURRENT_USER){
        return {
            ...state,
            isAuthorized:!isEmpty(action.payload),
            user:action.payload
        }
    }
    return state
}