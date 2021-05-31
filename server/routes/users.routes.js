const express = require('express')
const userRoute = express.Router()
const { registerUser, loginUser, userInfos, logout, allUsers, search } = require('../controllers/users.controllers')
const { isSuperAdmin, isAdmin, isUser, isAuth } = require('../middlewares/auth.middlewares')

// add user
userRoute.post('/register', registerUser)

// logged user 
userRoute.post('/login', loginUser)

// infos user
userRoute.get('/infos', userInfos)

// logout 
userRoute.get('/logout', logout)

// all Users
userRoute.get('/users', allUsers)

// search
userRoute.post('/search', search)

module.exports = userRoute