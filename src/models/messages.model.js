import mongoose from "mongoose";
const messagesCollection = "messages"

const messageSchema = new mongoose.Schema({
    user: {type: String, required: true},
    message: {type: String, required: true},
})

export const messagessModel = mongoose.model(messagesCollection, messageSchema)