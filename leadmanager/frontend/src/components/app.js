import React, {Component, Fragment} from 'react'
import ReactDom from 'react-dom'

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Header from './layout/header'
import Dashboard from './leads/dashboard'

import {Provider} from 'react-redux'
import store from '../store'

import {Provider as AlertProvider, positions, transitions} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layout/alerts'

import Login from './accounts/login'
import Register from './accounts/register'
import PrivateRoute from './common/private_route'

import { loadUser } from '../actions/auth'


// alert options
const alertOptions = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
}


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }


    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />

                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/register" component={Register} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))
