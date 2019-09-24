const initSchools = []

const schoolReducer = (state = initSchools, action) => {
    let newSchools = { ...state }
    switch (action.type) {
        case 'SET':
            return action.payload
        default:
            return newSchools
    }
}

export default schoolReducer
