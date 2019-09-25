import React from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'

const Students = ({ students }) => {
    return (
        <div id="app-students">
            <h1>Proud Students of CUNY</h1>
            <div>
                {
                    students.length ?
                    students.map(student => (<Card key={ student.id } type="student" data={ student } />)) :
                    (<span>No student is currently enrolled...</span>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ students }) => {
    return {
        students
    }
}

export default connect(mapStateToProps)(Students)
