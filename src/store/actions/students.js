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
        const students = (await axios.get('/api/students')).data
        return dispatch(set(students))
    }
}

const _create = (student) => {
    return {
        type: ACTION_TYPE.CREATE_STUDENT,
        payload: student
    }
}

const create = (student) => {
    return async dispatch => {
        const created = (await axios.post('/api/students', student)).data
        return dispatch(_create(created))
    }
}

const _update = (student) => {
    return {
        type: ACTION_TYPE.UPDATE_STUDENT,
        payload: student
    }
}

const update = (student) => {
    return async dispatch => {
        const created = (await axios.put(`/api/students/${student.id}`, student)).data
        return dispatch(_update(created))
    }
}

const _destroy = (studentId) => {
    return {
        type: ACTION_TYPE.DELETE_STUDENT,
        payload: studentId
    }
}

const destroy = (studentId) => {
    return async dispatch => {
        await axios.delete(`/api/students/${studentId}`)
        return dispatch(_destroy(studentId))
    }
}

export { load, create, update, destroy }
