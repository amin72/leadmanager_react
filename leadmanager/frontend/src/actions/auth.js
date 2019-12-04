import axios from 'axios'
import { returnErrors } from './messages'
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
} from '../actions/types'


// Check token & Load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({type: USER_LOADING})

    // Get token from state
    const token = getState().auth.token

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add headers config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('/api/auth/user/', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.state))
            dispatch({
                type: AUTH_ERROR
            })
        })
}
