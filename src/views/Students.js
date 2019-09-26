import React from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { CARD_TYPE } from '../commons/constants'

const Students = ({ students }) => {
    return (
        <div id="app-students">
            <h1>Proud Students of CUNY</h1>
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

const mapStateToProps = ({ students }) => {
    return {
        students
    }
}

export default connect(mapStateToProps)(Students)
