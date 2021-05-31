const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

const verifyIsAuth = (req, res) => {
    const token = req.cookies.user_token
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            if(err){
                console.log(err.message)
               return res.status(400).clearcookie('user_token').json({isAuth:false,role:''})
            }else{
                return  res.status(200).json({isAuth:true, role:decodedToken.role})
            }
        })
    }
    else{
        res.json({isAuth:false,role:''})
    }
}

const isSuperAdmin = (req, res, next) => {
    res.role = 'Super Admin'
    next()
}

const isAdmin = (req, res, next) => {
    res.role = 'Admin'
    next()
}

const isUser = (req, res, next) => {
    res.role = 'User'
    next()
}

const isAuth = (req, res, next) => {
    const token = req.cookies.user_token
    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) =>{
            if(!err && decodedToken.role === res.role){
             res.status(200).json({isAuth:true,role: res.role})
             next()
              
            }else{
               return res.status(400).clearcookie('user_token').json({isAuth:false,role:''})

            }
        })
    }else{
       return res.status(400).json({isAuth:false,role:''})

    }
}

module.exports = {verifyIsAuth, isSuperAdmin, isAdmin, isUser, isAuth}