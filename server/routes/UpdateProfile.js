const Router = require("express").Router();
const upload = require("../middlewares/multer");
const UserSchema = require("../models/userModel")
const AuthorizeUser = require("../middlewares/authorization")

Router.route("/").get(AuthorizeUser,async(req,res)=>{
  const findUser = await UserSchema.findOne({_id : req.user._id})
  if(!findUser){
    return res.status(404).send("User Not Found")
  }
  try{
    res.status(200).send(findUser)
  }catch(err){
    return res.status(500).send(err)
  }
})
Router.route("/").put(AuthorizeUser,upload.single("file"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const img = url + "/upload/" + req.file.filename;
  
  const getUser = await UserSchema.findByIdAndUpdate({_id : req.user._id},{...req.body, img : img})


  res.send(req.body);
});

module.exports = Router;
