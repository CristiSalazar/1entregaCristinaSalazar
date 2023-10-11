import mongoose from "mongoose";

const cartCollection = "carts"
const cartSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: Number, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
})

export const cartModel = mongoose.model(cartCollection, cartSchema)

