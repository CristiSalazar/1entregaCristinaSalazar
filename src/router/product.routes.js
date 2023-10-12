import {Router} from "express"
import { productsModel } from "../models/products.model.js"

const router = Router()

router.get("/", async (req, res) => {
     try{
         let products = await productsModel.find()
         res.send({result: "success", payload: products})
     } catch(error){
         console.log(error)
     }
})

router.post("/", async (req, res) => {
    let{title, price}= req.body
    if(!title||!price){
        res.send({status:"error", error:"missing"})
    }
    let result = await productsModel.create({title,price})
    res.send({result:"success", payload: result})
})

router.put("/:pid", async(req,res)=>{
    let{pid} = req.params
    let productsToRepleace = req.body
    if (!productsToRepleace.title||!productsToRepleace.price){
        res.send({status: "error", error: "faltan datos"})
    }
    let result = await productsModel.updateOne({_id: pid}, productsToRepleace)
    res.send({result:"success",playload:result})
})

router.delete("/:pid", async(req,res)=>{
    let{pid} = req.params
    let result = await productsModel.deleteOne({_id:pid})
    res.send({result:"success",playload:result})
})

export default router