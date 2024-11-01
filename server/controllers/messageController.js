import {Conversation} from "../models/conversationModel.js"
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const recieverId = req.params.recieverId;
    const {message} = req.body;

    let gotConversation = await Conversation.findOne({participants:{$all:[senderId,recieverId]}});
    if(!gotConversation){
      gotConversation = await Conversation.create({participants:[senderId,recieverId]});
    }
    const newMessage = await Message.create({senderId, receiverId: recieverId, message});
    if(newMessage){
      gotConversation.messages.push(newMessage._id);
    }
    await gotConversation.save();
    // ''socketio
    return res.status(200).json({message:"message sent successfully"});
  } catch (error) {
    console.log(error);
  }
}
export const getMessage = async (req,res) => {
  try {
      const receiverId = req.params.id;
      const senderId = req.id;
      const conversation = await Conversation.findOne({
          participants:{$all : [senderId, receiverId]}
      }).populate("messages"); 
      return res.status(200).json(conversation?.messages);
  } catch (error) {
      console.log(error);
  }
}
