import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

class CreateForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        gpa: '',
        schoolId: '',
        error: ''
    }
    handleChange = (prop, value) => {
        this.setState({[prop]: value})
    }
    handleEnroll = async () => {
        const { firstName, lastName, email, gpa, schoolId } = this.state
        try {
            await this.props.enrollStudent({ firstName, lastName, email, gpa, schoolId })
        } catch (e) {
            this.setState({ error: e.response.data.message })
        }
    }
    render() {
        const { firstName, lastName, email, gpa, schoolId, error } = this.state
        const { handleChange, handleEnroll } = this
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
                <select value={ schoolId } onChange={ ({target}) => handleChange('schoolId', target.value) } >
                    <option value=''>Not Enrolled</option>
                    {
                        schools.map((school) => (<option key={ school.id } value={ school.id }>{ school.name }</option>))
                    }
                </select>
                <button onClick={ handleEnroll }>Enroll</button>
                { error && (<p className='txt-error'>{ error }</p>)}
            </div>
        )
    }
}

const mapStateToProps = ({ schools }) => {
    return {
        schools
    }
}

const mapDispatchToProps = (dispatch) => {
    const { students } = actions
    return {
        enrollStudent: (student) => dispatch(students.create(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)
