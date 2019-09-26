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
    handleChange = (prop, value) => {
        this.setState({[prop]: value})
    }
    render() {
        const { firstName, lastName, email, gpa, selectedSchool } = this.state
        const { handleChange } = this
        const { schools } = this.props
        return (
            <div id="app-create">
                <h3>Quick Enroll</h3>
                <p>First Name</p>
                <input type="text" value={ firstName } onChange={ ({target}) => handleChange('firstName', target.value) } />
                <p>Last Name</p>
                <input type="text" value={ lastName } onChange={ ({target}) => handleChange('lastName', target.value) } />
                <p>Email</p>
                <input type="text" value={ email } onChange={ ({target}) => handleChange('email', target.value) } />
                <p>GPA</p>
                <input type="text" value={ gpa } onChange={ ({target}) => handleChange('gpa', target.value) } />
                <p>School</p>
                <select value={ selectedSchool } onChange={ ({target}) => handleChange('selectedSchool', target.value) } >
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
