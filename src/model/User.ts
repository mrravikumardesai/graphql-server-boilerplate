import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile_image_url:{type:String},
    salt:{
        type:String
    }
},{
    timestamps:true
})


const User = mongoose.model("User",userSchema)

export default User