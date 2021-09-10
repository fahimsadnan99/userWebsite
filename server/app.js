const express = require("express")
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const cors = require("cors")
const user = require("./routes/user")
const authUser = require("./routes/authUser")
const AboutUser = require("./routes/aboutUser")
const Logout = require("./routes/logout")
const UpdateProfile = require("./routes/UpdateProfile")
const path = require('path')




const app = express()


app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use("/upload", express.static(path.join(__dirname, 'image/user')))


app.use("/api/signup",user)
app.use("/api/signin",authUser)
app.use("/api/about", AboutUser)
app.use("/api/logout", Logout)
app.use("/api/update", UpdateProfile)


module.exports = app