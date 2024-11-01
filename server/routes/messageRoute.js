import express from "express"
import {sendMessage,getMessage} from "../controllers/messageController.js"
const router = express.Router()
import isAuthenticated from "../middlewares/isAuthenticated.js"

router.route("/sendMessage/:receiverId").post(isAuthenticated,sendMessage)
router.route("/:id").get(isAuthenticated, getMessage);
export default router