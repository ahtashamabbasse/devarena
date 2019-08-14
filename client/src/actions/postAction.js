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

export const getPosts = () => dispatch => {
    dispatch(setPostLoader());
    axios.get('api/posts/')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
            return dispatch({
                type: GET_POSTS,
                payload: null
            })
        })
};

export const deletePost = id => dispatch => {
    axios.delete('api/posts/' + id)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};


export const addLike = id => dispatch => {
    axios.post('api/posts/likes/' + id)
        .then(res => {
            dispatch(getPosts())
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};
export const removeLike = id => dispatch => {
    axios.post('api/posts/unlikes/' + id)
        .then(res => {
            dispatch(getPosts())
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

export const getPost = (id) => dispatch => {
    dispatch(setPostLoader());
    axios.get('/api/posts/'+id)
        .then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            return dispatch({
                type: GET_POST,
                payload: null
            })
        })
};

const setPostLoader = () => {
    return {
        type: POST_LOADING
    }
};