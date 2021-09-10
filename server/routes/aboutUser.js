const Router = require('express').Router()
const userSchema = require('../models/userModel')
const AuthorizeUser = require("../middlewares/authorization")


const getData = async(req,res)=>{
    const _id = req.user._id
    const findUser = await userSchema.findOne({_id : _id})
    if(!findUser){
        return res.status(404).json({"message" : "User Not Found"})
    }

    try{
        res.status(200).json({
            "data" : findUser
        })
    }catch(err){
        return res.status(500).json(err)  
    }
}




Router.route("/")
.get(AuthorizeUser,getData)


module.exports = Router