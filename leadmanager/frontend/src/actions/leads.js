import axios from 'axios'
import {GET_LEADS, DELETE_LEAD, ADD_LEAD} from './types'


// GET LEADS
export const getLeads = () => dispath => {
    axios.get('/api/leads/')
        .then(res => {
            dispath({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}


// DELETE LEAD
export const deleteLead = (id) => dispath => {
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            dispath({
                type: DELETE_LEAD,
                payload: id
            })
        }).catch(err => console.log)
}


// ADD LEAD
export const addLead = (lead) => dispath => {
    axios.post('/api/leads/', lead)
        .then(res => {
            dispath({
                type: ADD_LEAD,
                payload: res.data
            })
        }).catch(err => console.log)
}
