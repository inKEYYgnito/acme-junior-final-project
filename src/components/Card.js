import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import { CARD_TYPE, ROUTER_PATH } from '../commons/constants'

const Card = ({ cardName, school, gpa, students, studentCount, selectedId, selection, type, updateSchoolId, enrollStudent, deleteStudent}) => {
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
            <select onChange={ type === CARD_TYPE.STUDENT ? ({target}) => updateSchoolId(target.value) : ({target}) => enrollStudent(students.find(s => s.id === target.value)) } value={ selectedId }>
                {
                    selection.map((option) => (<option key={ option.id } value={ option.id }>{ option.name }</option>))
                }
            </select>
            { type === CARD_TYPE.STUDENT ? (<button onClick={ deleteStudent }>Destroy</button>) : '' }
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

    return { cardName, school, gpa, studentCount, selectedId, selection, students }
}

const mapDispatchToProps = (dispatch, { data, history }) => {
    return {
        updateSchoolId: (schoolId) => {
            const student = { ...data, schoolId }
            dispatch(actions.students.update(student))
        },
        enrollStudent: (student) => {
            student.schoolId = data.id
            dispatch(actions.students.update(student))
            history.push(`${ROUTER_PATH.SCHOOLS}/${data.id}`)
        },
        deleteStudent: () => dispatch(actions.students.destroy(data.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
