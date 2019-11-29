import React, {Component, Fragment} from 'react'
import ReactDom from 'react-dom'

import Header from './layout/header'
import Dashboard from './leads/dashboard'

import {Provider} from 'react-redux'
import store from '../store'

import {Provider as AlertProvider, positions, transitions} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alerts from './layout/alerts'


// alert options
const alertOptions = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
}


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />

                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))
