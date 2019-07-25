import {PROFILE_LOADING, GET_PROFILE, CLEAR_CURRENT_PROFILE, GET_ERRORS} from './types'
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

    axios.post("api/profile",profileData)
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
