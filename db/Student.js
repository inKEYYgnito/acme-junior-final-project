const connection = require('./connection')
const { Sequelize } = connection
const { UUID, UUIDV4, STRING, DECIMAL, VIRTUAL } = Sequelize

const Student = connection.define('student', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    firstName: {
        type: STRING,
        allowNull: false
    },
    lastName: {
        type: STRING,
        allowNull: false
    },
    fullName: {
        type: VIRTUAL,
        get: function() {
            return `${this.lastName}, ${this.firstName}`
        }
    },
    email: {
        type: STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    gpa: {
        type: DECIMAL
    }
})

module.exports = Student
