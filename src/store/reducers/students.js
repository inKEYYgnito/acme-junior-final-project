import { ACTION_TYPE } from '../../commons/constants'

const initStudents = []

const studentReducer = (state = initStudents, action) => {
    const { payload } = action
    switch (action.type) {
        case ACTION_TYPE.SET_STUDENTS:
            return payload
        case ACTION_TYPE.CREATE_STUDENT:
            return [ payload, ...state]
        case ACTION_TYPE.UPDATE_STUDENT:
            const newState = [ ...state ]
            newState.splice(newState.findIndex(student => student.id === payload.id), 1, payload)
            return newState
        case ACTION_TYPE.DELETE_STUDENT:
            return state.filter(s => s.id !== payload)
        default:
            return state
    }
}

export default studentReducer
