const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use('/build', express.static(path.join(__dirname, 'dist')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/api/schools', require('./api/schools'))
app.use('/api/students', require('./api/students'))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')))

module.exports = app
