import mongoose from "mongoose";
const productsCollection = "products"

const productsSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    price: {type: String},
    stock: {type: String},
})

export const productsModel = mongoose.model(productsCollection, productsSchema)