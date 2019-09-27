import React from 'react'
import { connect } from 'react-redux'

const Home = ({ studentsCount, schoolsCount }) => {
    return (
        <div id="app-home">
            <h1>Welcome to CUNY Enrollment App!</h1>
            <p>We have established a total of { schoolsCount } schools.</p>
            <p>Over { studentsCount } students are currently enrolled.</p>
        </div>
    )
}

const mapStateToProps = ({students, schools}) => {
    return {
        studentsCount: students.length,
        schoolsCount: schools.length
    }
}

export default connect(mapStateToProps)(Home)

