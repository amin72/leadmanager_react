import axios from 'axios'
import {GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS} from './types'


// GET LEADS
export const getLeads = () => dispath => {
    axios.get('/api/leads/')
        .then(res => {
            dispath({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(err => console.log(err.response.data))
}


// DELETE LEAD
export const deleteLead = (id) => dispath => {
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            dispath({
                type: DELETE_LEAD,
                payload: id
            })
        }).catch(err => console.log(err.response.data))
}


// ADD LEAD
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead)
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}
