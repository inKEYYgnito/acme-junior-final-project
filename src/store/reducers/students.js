import { ACTION_TYPE } from '../../commons/constants'

const initStudents = []

const studentReducer = (state = initStudents, action) => {
    let newStudents = [ ...state ]
    switch (action.type) {
        case ACTION_TYPE.SET_STUDENTS:
            return action.payload
        default:
            return newStudents
    }
}

export default studentReducer
