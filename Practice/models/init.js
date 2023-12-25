const mongoose=require("mongoose");
const Schema =mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        maxLength:25,
        required:true,
    },
    contact:{
        type:String,
        maxLength:12
    },
    bio:{
        type:String,
        maxLength:200,
    },
    followers:{
        type:Number,
        default:0
    },
    followings:{
        type:Number,
        default:0
    },
    username:{
        type:String,
        maxLength:25,
        required:true,
        unique:true
    },
    password:{
        type:String,
        maxLenght:20,
        minLength:8,
        required:true,
    },


});
const user =mongoose.model("user",userSchema);
module.exports=user;
