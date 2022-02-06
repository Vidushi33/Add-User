const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
      email:String,
      fullName:String,
      userName:String
});

const UserModel = mongoose.model("entries" , UserSchema);

module.exports = UserModel;