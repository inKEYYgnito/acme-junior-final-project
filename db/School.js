const connection = require('./connection')
const { Sequelize } = connection
const { UUID, UUIDV4, STRING } = Sequelize

const School = connection.define('school', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        unique: true,
        allowNull: false
    },
    imageURL: {
        type: STRING,
        validate: {
            isURL: true
        }
    }
})

module.exports = School
