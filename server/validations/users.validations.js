const Joi = require('joi')

const registerValidation = (data) =>{
    const Schema = Joi.object({
        first_name : Joi.string().required().min(4),
        last_name : Joi.string().required().min(4),
        adress : Joi.string().required().min(6),
        phone : Joi.string().required().min(10),
        email : Joi.string().required().email().min(6),
        password : Joi.string().required().min(6),
        role : Joi.string()
    })
    return Schema.validate(data)
}

const loginValidation = (data) => {
    const Schema = Joi.object({
        email : Joi.string().required().email().min(6),
        password : Joi.string().required().min(6)
    })
    return Schema.validate(data)
}

module.exports = {registerValidation, loginValidation}