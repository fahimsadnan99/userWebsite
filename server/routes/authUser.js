const Router = require("express").Router();
const bcrypt = require("bcrypt");
const userSchema = require("../models/userModel");

const authUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "Fill All Field" });
  }
  let user = await userSchema.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "Invalid Email and Password" });
  }

  const passMatch = await bcrypt.compare(password, user.password);
  if (!passMatch) {
    return res.status(400).json({ message: "Invalid Email and Password" });
  }

  const Token = user.generateJWT();
  res.cookie("token", Token, {
    expires: new Date(Date.now() + 25892000000),
  });
  try {
    res.status(201).send({
      message: "Successfully login",
      data: user,
      token: Token,
    });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

Router.route("/").post(authUser);

module.exports = Router;
