import { ACTION_TYPE } from '../../commons/constants'
import axios from 'axios'

const set = (schools) => {
    return {
        type: ACTION_TYPE.SET_SCHOOLS,
        payload: schools
    }
}

const load = () => {
    return async dispatch => {
        try {
            const schools = (await axios.get('/api/schools')).data
            dispatch(set(schools))
        } catch (e) {
            console.error(e)
        }
    }
}

export { load }
