const initStudents = []

const studentReducer = (state = initStudents, action) => {
    let newStudents = { ...state }
    switch (action.type) {
        case 'SET':
            return action.payload
        default:
            return newStudents
    }
}

export default studentReducer
