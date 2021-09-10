const app = require("./app")
const mongoose = require("mongoose")

const DB = process.env.DB_URL
let PORT = process.env.PORT || 3002
mongoose.connect(DB, {useCreateIndex : true, useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database Connection Successfully");
},{
    
})

app.listen(PORT,()=>{
    console.log("Server is Connect On PORT "+ PORT);
})