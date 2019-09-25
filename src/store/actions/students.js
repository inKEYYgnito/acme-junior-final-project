import { ACTION_TYPE } from '../../commons/constants'
import axios from 'axios'

const set = (students) => {
    return {
        type: ACTION_TYPE.SET_STUDENTS,
        payload: students
    }
}

const load = () => {
    return async dispatch => {
        try {
            const students = (await axios.get('/api/students')).data
            dispatch(set(students))
        } catch (e) {
            console.error(e)
        }
    }
}

export { load }
