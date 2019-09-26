import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ROUTER_PATH } from '../commons/constants'
import Home from './Home'
import School from './School'
import Schools from './Schools'
import Students from './Students'

const Content = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={ ROUTER_PATH.HOME } component={ Home } />
                <Route path={ ROUTER_PATH.STUDENTS } component={ Students } />
                <Route path={ `${ROUTER_PATH.SCHOOLS}/:id` } render={ ({ match }) => ( <School schoolId={ match.params.id } /> ) } />
                <Route path={ ROUTER_PATH.SCHOOLS } component={ Schools } />
                <Redirect to={ ROUTER_PATH.HOME } />
            </Switch>
        </React.Fragment>
    )
}

export default Content
