import {Router} from "express"
import { cartsModel } from "../models/carts.models.js"


const CartRouter = Router()

CartRouter.get("/", async(req,res) => {
    try{
        let carts = await cartsModel.find()
        res.send({result: "succes", playload: carts})
    }
    catch(error){
        console.log(error)
    }
})

CartRouter.post("/", async(req, res) => {
    let {title, description, price, stock} = req.body
    if (!title || !description || price || !stock){
        res.send({status: "error", error: "missing body params"})
    }
    let result = await cartsModel.create({title, description,price, stock})
    res.send({result:"succes", playload:result})
})

CartRouter.put("/:id_cart", async(req,res)=>{
    let{id_cart} = req.params
    let cartsToRepleace = req.body
    if (!cartsToRepleace.title||!cartsToRepleace.description||!cartsToRepleace.price||!cartsToRepleace.stock){
        res.send({status: "error", error: "missing body params"})
    }
    let result = await cartsModel.updateOne({_id: id_cart}, cartsToRepleace)
    res.send({result:"success",playload:result})
})

CartRouter.delete("/:id_cart", async(req,res)=>{
    let{id_cart} = req.params
    let result = await cartsModel.deleteOne({_id:id_cart})
    res.send({result:"success",playload:result})
})

export default CartRouter