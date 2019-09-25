import React from 'react'
import { connect } from 'react-redux'

const Card = ({ data, type }) => {
    return (
        <div className="card">
            <span className="name">{ data.fullName }</span>
            <img src={''} alt={''} height="20%" width="100%" />
            <span className="gpa">GPA: { data.gpa }</span>
            <select>
                <option value="">Not Enrolled</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <button>Destroy</button>
        </div>
    )
}

const mapStateToProps = ({ student, school }) => {
    return {
        student,
        school
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
