const Router = require('express').Router()
const bcrypt = require('bcrypt')
const userSchema = require('../models/userModel')


const createNewUser = async(req,res)=>{
    const {name,email,password} = req.body
   
    if(!name ||!email || !password){
        return res.status(404).json({message : "Fill All Field"})
    }
    let user = await userSchema.findOne({email : email})
  
    if(user){
        return res.status(400).json({message : "User Already Exist"})
    }
    const hasPass = await bcrypt.hash(password, 10)
    user = new userSchema({
        name,
        email,
        password : hasPass
    })

    try{
        const data = await user.save()
        res.status(201).send({
            message : "Successfully Signup",
            data : data
        })
    }catch(err){
        return res.status(500).json({error : err.message})
    }
}




Router.route("/")
.post(createNewUser)

module.exports = Router