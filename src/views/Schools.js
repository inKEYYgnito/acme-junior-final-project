import React from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { CARD_TYPE } from '../commons/constants'

const Schools = ({ schools }) => {
    return (
        <div id="app-students">
            <h1>City Universities of New York</h1>
            <div>
                {
                    schools.length ?
                    schools.map(school => (<Card key={ school.id } type={ CARD_TYPE.SCHOOL } data={ school } />)) :
                    (<span>No school is currently established...</span>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ schools }) => {
    return {
        schools
    }
}

export default connect(mapStateToProps)(Schools)
