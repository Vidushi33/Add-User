require('dotenv').config()
const express = require('express')
const UserModel = require("./database/data");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose") 
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB , { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED")).catch(err => console.log(err));

// General API
app.get("/" , (req, res) => {
    return res.json({"Welcome" : `to the backend software`});
});

// Post Data
// app.post("/", async(req, res) => {
//     console.log(req.body);
    
//     const newUser = await UserModel.create(req.body);
//     console.log(newUser);
   
//     return res.json({
//         userAdded: newUser,
//         message : "Registration Successful!!!"
//     });
   
// })

//Get All Users
app.get("/getUsers",async(req,res)=>{
    const users=await UserModel.find()
    res.json({
        users:users
    })
})


//Add USER API
app.post("/addUser",async(req,res)=>{
    console.log(req.body)
    const newUser=await UserModel.create(req.body)
    return res.json({
        message:"User Added Successfully",
        icon:"success"
    })
})

app.listen(process.env.PORT || 4000,()=>{
    console.log("Express App is Running")
})