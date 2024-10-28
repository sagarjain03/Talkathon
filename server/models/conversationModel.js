import mongoose from "mongoose";
const conversationModel = new mongoose.schema({
  participants:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }],
  messages:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message"
  }]
},{
  timestamps:true})
export default mongoose.model("Conversation",conversationModel)