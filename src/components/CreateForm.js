import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        gpa: '',
        selectedSchool: ''
    }
    handleChange = (ev) => {
        console.log(ev)
    }
    render() {
        const { firstName, lastName, email, gpa, selectedSchool } = this.state
        const { handleChange } = this
        const { schools } = this.props
        return (
            <div id="app-create">
                <h3>Quick Enroll</h3>
                <p>First Name</p>
                <input type="text" value={ firstName } onChange={ handleChange } />
                <p>Last Name</p>
                <input type="text" value={ lastName } onChange={ handleChange } />
                <p>Email</p>
                <input type="text" value={ email } onChange={ handleChange } />
                <p>GPA</p>
                <input type="text" value={ gpa } onChange={ handleChange } />
                <p>School</p>
                <select value={ selectedSchool } onChange={ handleChange } >
                    <option value=''>Not Enrolled</option>
                    {
                        schools.map((school) => (<option key={ school.id } value={ school.id }>{ school.name }</option>))
                    }
                </select>
                <button>Enroll</button>
            </div>
        )
    }
}

const mapStateToProps = ({ schools }) => {
    return {
        schools
    }
}

export default connect(mapStateToProps)(CreateForm)
