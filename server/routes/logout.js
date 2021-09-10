const Router = require('express').Router()


Router.get("/", (req,res)=>{
     console.log("Logout");
     res.clearCookie('token', {path : "/"})
     res.status(200).send("Logout Successful")
})

module.exports = Router