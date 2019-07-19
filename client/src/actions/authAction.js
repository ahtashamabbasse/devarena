import {GET_ERRORS, SET_CURRENT_USER} from './types'
import axios from 'axios'
import setAuthToken from "../utility/setAuthToken";
import jwt_decode from 'jwt-decode'

export const registerUser = (userData, history) => dispatch => {

    axios.post('api/users/register', userData)
        .then(res => {
            return history.push('/login')
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};
export const loginuser = (userData) => dispatch => {
    axios.post('api/users/login', userData)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decode = jwt_decode(token);
            dispatch(setCurrentuser(decode))
        })
        .catch(err => {
            return dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

export const setCurrentuser = (decode) => {
    return {
        type: SET_CURRENT_USER,
        payload: decode
    }
};