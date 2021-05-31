const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    first_name : {
        type : String,
        required : true,
        min : 4
    },
    last_name : {
        type : String,
        required : true,
        min : 4
    },
    adress : {
        type : String,
        required : true,
        min : 6
    },
    phone : {
        type : String,
        required : true,
        min : 10
    },
    email : {
        type : String,
        required : true,
        min : 6
    },
    password : {
        type : String,
        required : true,
        min : 6
    },
    role : {
        type : String,
        enum : ["User", "Admin", "Super Admin"],
        default : "user"
    },
    active : {
        type : Boolean,
        default : false
    },
    created_at : {
        type : Date, 
        default: new Date().toLocaleDateString()
    }
})

module.exports = mongoose.model('User', userSchema)