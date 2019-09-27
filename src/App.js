import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions'
import Nav from './components/Nav'
import Create from './components/CreateForm'
import Content from './views/Content'

class App extends Component {
    componentDidMount() {
        this.props.loadSchools()
        this.props.loadStudents()
    }
    render() {
        return (
            <HashRouter>
                <Nav />
                <Route path="/" render={ ({history}) => (<Create history={ history } />) } />
                <Content />
            </HashRouter>
        )
    }
}

const mapStateToProps = ({schools, students}) => {
    return {
        schools,
        students
    }
}

const mapDispatchToProps = (dispatch) => {
    const {schools, students} = actions
    return {
        loadSchools: () => dispatch(schools.load()),
        loadStudents: () => dispatch(students.load())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

