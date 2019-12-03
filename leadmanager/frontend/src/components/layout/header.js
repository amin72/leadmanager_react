import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div class="container">
                    <a className="navbar-brand" href="#">Lead Manager</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
