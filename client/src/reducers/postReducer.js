import {ADD_POST, GET_POST, GET_POSTS} from "../actions/types";

const initialState = {
    post: null,
    posts: [],
    loading: false,

};

export default function (state=initialState,action) {
    switch (action.type) {
        case GET_POST:
            return{
                ...state,
                post: action.payload,
                loading: false
            };
        case ADD_POST:
            return{
                ...state,
                post: [action.payload,...state.posts],
            };
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            };
        default:
            return state
    }
}
