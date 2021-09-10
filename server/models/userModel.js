const mongoose = require("mongoose")
const validator = require("validator")
const JWT = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name : {
        type : String,
        minlength : 3,
        maxlength : 50,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required :true,
        minlength : 5,
        maxlength : 255,
        validate(value){
           if(!validator.isEmail(value)){
               throw new Error("Invalid Email Address")
           }
        }
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 1024
    },
    img :{
        type : String,
        default : ""
    },
    age : {
        type : String,
        default : ""
    },
    study : {
        type : String,
        default : ""
    },
    live : {
        type : String,
        default : ""
    },
    blood : {
        type : String,
        default : ""
    }
},{timestamps : true})

userSchema.methods.generateJWT = function(){
    const token = JWT.sign({_id : this._id, email : this.email,name : this.name}, process.env.KEY)
    return token
}
module.exports = mongoose.model('User', userSchema)