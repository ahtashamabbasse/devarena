import {GET_ERRORS} from './types'
import axios from 'axios'

export const registeruser = (userData,history) => dispatch => {

    axios.post('api/users/register', userData)
        .then(res => {
            return history.push('/login')
        })
        .catch(err => {
            return dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
};