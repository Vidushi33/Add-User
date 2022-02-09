require('dotenv').config()
const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const UserModel=require('./database/data')

app.use(express.json())
app.use(cors())

var mongodb=process.env.MONGODB_URI;
mongoose.connect (mongodb,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("CONNECTION ESTABLISHED"));

app.get("/",async(req,res)=>{
    
    return res.json({"Welcome!" : "to the backend"})
})


app.post("/addUsers",async(req,res)=>{
    console.log(req.body)
    const addData= await UserModel.create({fullName:req.body.fullName,email:req.body.email,userName:req.body.userName})
    if(req.body.input){
        req.body.input.shift();
        const addMoreData=await UserModel.insertMany(req.body.input)
    }
    return res.json({
        message:"Data submitted successfully"
    })
})

app.get("/getUsers",async(req,res)=>{
    const users=await UserModel.find()
    res.json({
        users:users
    })
})

app.listen(process.env.PORT || 4000,()=>{
    console.log("My express app is running")
})