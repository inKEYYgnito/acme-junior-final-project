const db = require('../db')
const { Student } = db.models
const express = require('express')
const app = express.Router()
const crudify = require('./crudify')

crudify(app, Student)

module.exports = app
