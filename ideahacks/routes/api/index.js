const express = require('express')
const apiRouter = express.Router()
const userApiHandlers = require('./users.js')

apiRouter.get('/users', userApiHandlers.getUsers)
apiRouter.get('/users/:email', userApiHandlers.getUserByEmail)
apiRouter.post('/users', userApiHandlers.postUsers)
apiRouter.delete('/users', userApiHandlers.deleteUsers)

module.exports = apiRouter
