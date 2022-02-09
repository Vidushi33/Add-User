const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    userName:{
        type:String
    }
})
const UserModel=mongoose.model("Users",UserSchema)

module.exports=UserModel;