import express from "express";
import { createConversation, getConversation, addMessageToConversation } from "../controllers/conversationController.js";

const router = express.Router();

// Route to create a conversation
router.post("/createConvo/:user1Id/:user2Id", createConversation);

// Route to get conversations
router.get("/getConvo/:user1Id", getConversation);

// Route to add a message to a conversation
router.post("/addMessage/:user1Id/:user2Id", addMessageToConversation);

export default router;
