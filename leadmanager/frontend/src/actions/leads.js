import axios from 'axios'
import {GET_LEADS} from './types'


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
