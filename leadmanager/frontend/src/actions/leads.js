import axios from 'axios'
import {GET_LEADS, DELETE_LEAD} from './types'


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
