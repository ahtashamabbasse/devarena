import {ADD_POST, DELETE_POST, GET_POST, GET_POSTS, POST_LOADING,DELETE_COMMENT} from "../actions/types";

const initialState = {
    post: null,
    posts: [],
    loading: false,

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p._id !== action.payload )
            };
        case DELETE_COMMENT:
            return {
                ...state,
                posts: state.posts.filter(p => p._id !== action.payload )
            };
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
}
