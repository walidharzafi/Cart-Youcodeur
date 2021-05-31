const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { registerValidation, loginValidation } = require('../validations/users.validations')

// token
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id, role) =>{
    return jwt.sign({id, role}, process.env.SECRET_KEY, { expiresIn : maxAge})
}

// register users
exports.registerUser = async (req, res) => {
    // check the error
    const {error} = registerValidation(req.body)
    if(error){
        return res.status(400).json(error.details[0].message)
    }

    try {
        const { first_name, last_name, adress, phone, email, password, role } = req.body
        // check if the email exist 
        const userExist = await User.findOne({email : email})
        if(userExist){
            return res.status(400).json({message : "This Email Already Exist"})
        }
        // hash password 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        // savre user
        const newUser = new User({
            first_name, 
            last_name, 
            adress, 
            phone, 
            email, 
            password : hashPassword,
            role
        })
        const saveUser = await newUser.save()
        return res.status(200).json({message: 'You Are Registered Successfully, you need to activate your account'})
        
    } catch (error) {
        res.status(500).json(error)
    }

}

// login users
exports.loginUser = async (req, res) => {
    // error
    const {error} = loginValidation(req.body)
    if (error) {
        return res.status(400).json(error.details[0].message)
    }

    try {
        // find user
        const user = await User.findOne({email : req.body.email})
        if (!user) {
            return res.status(400).json({message : "This Email Does Not Exist"})
        }
        // compare password 
        const comparePw = await bcrypt.compare(req.body.password , user.password)
        if (!comparePw) {
           return res.status(400).json({message : "This Password is Not Valid"})
        }
        // check the account is active
        if (user.active === false){
           return res.status(400).json({message : "You must activate your account"})
        }
        // create token 
        const token = createToken(user.id, user.role)
        return res.status(200).cookie('user_token', token, { httpOnly : true, maxAge : maxAge*1000 }).json({message: 'Loged In', isAuth:true, role:user.role})
    } catch (error) {
        res.status(500).json(error)
    }
}

// get the user infos
exports.userInfos = async (req, res) =>{
    try {
       const token = req.cookies.user_token
       let id_user
        if (token) {
           jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            id_user = decodedToken.id
            return id_user
           })
        }
        const infos = await User.find({_id : id_user})
        res.status(200).json(infos) 
    } catch (error) {
        res.status(500).json(error)
    }
}

// logout
exports.logout = (req, res) => {
    return res.status(200).clearCookie('user_token').json({isAuth:false,role:''})
}

// find all users
exports.allUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

// search users
exports.search = async (req, res) => {
    try {
        const {email , date} = req.body
        const formatDate = new Date(Date.parse(date))

        if( email && date){
            const allUsers = await User.find({email : email, created_at : formatDate})
            if (allUsers) return res.status(201).json(allUsers)   
        }
        else if(email) {
            const allUsers = await User.find({email : email})
            if(allUsers) return res.status(201).json(allUsers)
        }
        else if(date){
            const allUsers = await User.find({created_at : formatDate})
            if(allUsers) return res.status(201).json(allUsers)
        }
    } catch (error) {
        res.status(500).json(error)
    }

}