import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js"

dotenv.config({})

const app = express();
const PORT = process.env.PORT || 3000
connectDB()
app.use(express.json())

app.use("/api/v1/user",userRoute)

app.listen(process.env.PORT,()=>{
  console.log(`connected to ${PORT}`)
})