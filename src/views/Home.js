import React, { Component } from 'react'

class Home extends Component {
    state = {}
    render() {
        return (
            <div id="app-home">
                <h1>Welcome to CUNY Enrollment App!</h1>
                <p>Our top school is { 'topSchool' } with { 0 } students.</p>
                <p>Our most popular school is { 'popularSchool' } with { 0 } students.</p>
            </div>
        )
    }
}

export default Home
