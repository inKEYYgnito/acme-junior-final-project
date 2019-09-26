import React from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { CARD_TYPE } from '../commons/constants'

const School = ({ school, students }) => {
    console.log({ school, students })
    return (
        <div id="app-students">
            { school && <h1>{ school.name } with { students.length } students</h1> }
            <div>
                {
                    students.length ?
                    students.map(student => (<Card key={ student.id } type={ CARD_TYPE.STUDENT } data={ student } />)) :
                    (<span>No student is currently enrolled...</span>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ schools, students }, { schoolId }) => {
    return {
        school: schools.find(s => s.id === schoolId),
        students: students.filter(s => s.schoolId === schoolId)
    }
}

export default connect(mapStateToProps)(School)
