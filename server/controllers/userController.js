import userModel from "../models/userModel.js";

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