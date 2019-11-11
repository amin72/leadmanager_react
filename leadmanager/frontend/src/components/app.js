import React, {Component} from 'react'
import ReactDom from 'react-dom'
import Header from './layout/header'


class App extends Component {
    render() {
        return <Header />
    }
}

ReactDom.render(<App />, document.getElementById('app'))
