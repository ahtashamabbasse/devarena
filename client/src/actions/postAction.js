import {
    GET_ERRORS,
    GET_POSTS,
    ADD_POST,
    POST_LOADING,
    DELETE_POST,
    GET_POST
} from './types'
import axios from 'axios'

export const addPost = (postData) => dispatch => {

    axios.post('api/posts/', postData)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};