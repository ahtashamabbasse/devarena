import {PROFILE_LOADING, GET_PROFILE, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER} from './types'
import axios from 'axios'

export const getCurrentProfile = () => dispatch => {

    dispatch(setProfileLoading());

    axios.get('/api/profile/',)
        .then(res => {
            dispatch(setProfileLoading());
            return dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        })
        .catch(err => {
            return dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        })
};

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
};

export const clearProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
};

export const createProfile = (profileData, history) => dispatch => {

    axios.post("api/profile", profileData)
        .then(res => {
            return history.push('/dashboard')
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

export const addExpericen = (expData, history) => dispatch => {

    axios.post("api/profile/experience", expData)
        .then(res => {
            return history.push('/dashboard')
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};
export const addEducation = (expData, history) => dispatch => {

    axios.post("api/profile/education", expData)
        .then(res => {
            return history.push('/dashboard')
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

export const onDeleteAccount = () => dispatch => {

    if (window.confirm("are you sure? You cannot undo this action")) {
        axios.delete("api/profile")
            .then(res => {
                return dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            })
            .catch(err => {
                return dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            })
    }
};

export const deleteExperience = (id) => dispatch => {

    if (window.confirm("are you sure? You cannot undo this action")) {
        axios.delete("api/profile/experience/"+id)
            .then(res => {
                return dispatch({
                    type: GET_PROFILE,
                    payload: res.data
                })
            })
            .catch(err => {
                return dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            })
    }
};

