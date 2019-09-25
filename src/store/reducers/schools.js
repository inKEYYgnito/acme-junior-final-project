import { ACTION_TYPE } from '../../commons/constants'

const initSchools = []

const schoolReducer = (state = initSchools, action) => {
    let newSchools = [ ...state ]
    switch (action.type) {
        case ACTION_TYPE.SET_SCHOOLS:
            return action.payload
        default:
            return newSchools
    }
}

export default schoolReducer
