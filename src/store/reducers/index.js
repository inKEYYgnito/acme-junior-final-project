import { combineReducers } from 'redux'
import schoolReducer from './schools'
import studentReducer from './students'

const reducer = combineReducers({
    schools: schoolReducer,
    students: studentReducer
})

export default reducer
