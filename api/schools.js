const db = require('../db')
const { School } = db.models
const express = require('express')
const app = express.Router()
const crudify = require('./crudify')

crudify(app, School)

module.exports = app
