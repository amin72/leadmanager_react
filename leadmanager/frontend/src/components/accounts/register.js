import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }


    onSubmit = e => {
        e.preventDefault()
        console.log('Submit!')
    }


    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        const {username, email, password, password2} = this.state

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Regiser</h2>
                
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                onChange={this.onChange}
                                value={email}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>

                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}


export default Register
