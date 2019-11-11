import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getLeads} from '../../actions/leads'


class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getLeads()
    }
    
    render() {
        return (
            <div>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStatetoProps = state => ({
    leads: state.leads.leads
})

export default connect(mapStatetoProps, {getLeads})(Leads)
