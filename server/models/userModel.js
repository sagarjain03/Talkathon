import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname:{
    type:String,
    required:true
  },
  userName: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
  profilePhoto:{
    type:String,
    default:""
  },
  gender:{
    type:String,
    required:true,
    enum:["male","female"]
  }
},{
  timestamps:true});

export default mongoose.model("User", UserSchema);