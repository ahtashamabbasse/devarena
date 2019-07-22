import {GET_PROFILES, PROFILE_LOADING, PROFILE_NOT_FOUND, GET_PROFILE, GET_ERRORS, CLEAR_CURRENT_PROFILE} from './types'
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
