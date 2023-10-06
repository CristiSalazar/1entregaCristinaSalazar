import mongoose from "mongoose";

const cartsCollection = "carts"
const cartsSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: Number},
    price: {type: Number},
    stock: {type: Number},
})

export const cartsModel = mongoose.model(cartsCollection, cartsSchema)