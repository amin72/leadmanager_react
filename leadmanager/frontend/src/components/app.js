import React, {Component, Fragment} from 'react'
import ReactDom from 'react-dom'

import Header from './layout/header'
import Dashboard from './leads/dashboard'

import {Provider} from 'react-redux'
import store from '../store'


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))
