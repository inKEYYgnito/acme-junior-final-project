import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CARD_TYPE, ROUTER_PATH } from '../commons/constants'

const Card = ({ cardName, school, gpa, studentCount, selectedId, selection, type}) => {
    return (
        <div className="card">
            {
                type === CARD_TYPE.STUDENT ?
                <span className="name">{ cardName }</span> :
                <Link className="name" to={`${ROUTER_PATH.SCHOOLS}/${school.id}`}>{ cardName }</Link>
            }
            <img src={ school.imageURL } alt={ school.name } height="40%" width="100%" />
            {   
                type === CARD_TYPE.STUDENT ?
                <span>GPA: { parseInt(gpa).toFixed(2) }</span> :
                <span>Student Amount: { studentCount }</span>
            }
            <select value={ selectedId }>
                {
                    selection.map((option) => (<option key={ option.id } value={ option.id }>{ option.name }</option>))
                }
            </select>
            { type === CARD_TYPE.STUDENT ? (<button>Destroy</button>) : '' }
        </div>
    )
}

const mapStateToProps = ({ students, schools }, { data, type }) => {
    let cardName = ''
    let school = {}
    let gpa = 0
    let studentCount = 0
    let selectedId = ''
    let selection =  []

    if ( type === CARD_TYPE.STUDENT ) {
        cardName = data.fullName
        school = data.schoolId ? schools.find(s => s.id === data.schoolId) : { imageURL: '', name: '' }
        gpa = data.gpa
        selectedId = school.id
        selection = schools.map(s => ({ id: s.id, name: s.name }))
    }
    else if ( type === CARD_TYPE.SCHOOL ) {
        cardName = data.name
        school = data
        studentCount = students.filter(s => s.studentId === school.id).length
        selection = [{ id: '', name: 'Enroll a Student'}, ...students.filter(s => s.schoolId !== school.id).map(s => ({ id: s.id, name: s.fullName }))]
    }

    return { cardName, school, gpa, studentCount, selectedId, selection }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
