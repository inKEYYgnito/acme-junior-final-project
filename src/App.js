import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { ROUTER_PATH } from './commons/constants'
import Nav from './components/Nav'
import Create from './components/CreateForm'
import Home from './views/Home'
import School from './views/School'
import Schools from './views/Schools'
import Students from './views/Students'

class App extends Component {
    state = {}
    render() {
        return (
            <HashRouter>
                <Nav />
                <Switch>
                    <Route exact path={ ROUTER_PATH.HOME } component={ Home } />
                    <Route path={ `${ROUTER_PATH.STUDENTS}/create` } component={ Create } />
                    <Route path={ ROUTER_PATH.STUDENTS } component={ Students } />
                    <Route path={ `${ROUTER_PATH.SCHOOLS}/:id` } component={ School } />
                    <Route path={ ROUTER_PATH.SCHOOLS } component={ Schools } />
                    <Redirect to={ ROUTER_PATH.HOME } />
                </Switch>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

