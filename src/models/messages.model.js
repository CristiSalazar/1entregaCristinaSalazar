import mongoose from "mongoose";
const messagesCollection = "messages"

const messageSchema = new mongoose.Schema({
    usuario: {type: String},
    mensaje: {type: String},
})

export const messagessModel = mongoose.model(messagesCollection, messageSchema)