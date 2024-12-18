import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js"
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser";

dotenv.config({})

const app = express();
const PORT = process.env.PORT || 3000
connectDB()
app.use(express.json())
app.use(cookieParser());

app.use("/api/v1/user",userRoute)
app.use("/api/v1/message",messageRoute)

app.listen(process.env.PORT,()=>{
  console.log(`connected to ${PORT}`)
})