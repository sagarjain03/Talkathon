import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"

import bcrypt from "bcrypt"

export const register = async (req, res) => {
  try {
    const { fullname, userName, email, password,confirmPassword,gender,profilePhoto } = req.body;
  if(!fullname || !userName || !email || !password || !gender){
    return res.status(400).json({message:"All fields are required"})
  }
  if(password !== confirmPassword){
    return res.status(400).json({message:"Passwords do not match"})
  }
  const user = await userModel.findOne({email})
  if(user){
    return res.status(409).json({message:"User already exist"})
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const malePhoto = `https://avatar.iran.liara.run/public/boy/${userName}`
  const femalePhoto = `https://avatar.iran.liara.run/public/girl/${userName}`
  const result = await userModel.create({
    fullname,
    userName,
    email,
    password: hashedPassword,
    gender,
    profilePhoto:gender=="male"?malePhoto:femalePhoto

  });

  res.status(201).json({ success: true, message:"user registered successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    
  }

}

export const login = async (req,res)=>{
  try {
    const {email,password} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
      return res.status(404).json({success:false,message:"email or password is incorrect"})
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
      return res.status(400).json({success:false,status:400,message:"email or password is incorrect"})
    }
    const tokenData = {
      userId :user._id
    };
    const token = await jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:"1d"});
    return res.status(200).cookie("token",token,{httpOnly:true},{maxAge:24*60*60*1000},{sameSite:"strict"}).json({
      _id:user._id,
      fullname:user.fullname,
      userName:user.userName,
      email:user.email,
      gender:user.gender,
      profilePhoto:user.profilePhoto
    }
    )

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    
  }
}
export const logout = async (req,res)=>{
  try {
    return res.status(200).cookie("token","",{maxAge:0}).json({message:"logged out successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
    
  }
}

export const getOtherUsers = async (req,res)=>{
  try {
    const userId = req.id;
    const otherUsers = await userModel.find({ _id: { $ne: userId } });
    return res.status(200).json(otherUsers );
    
  } catch (error) {
    console.log(error);
    
    
  }
}