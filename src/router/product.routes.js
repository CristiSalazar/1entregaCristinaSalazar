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
    let{title, description, price, stock}= req.body
    if(!title||!description||!price||!stock){
        res.send({status:"error", error:"missing"})
    }
    let result = await productsModel.create({title, description,price,stock})
    res.send({result:"success", payload: result})
})

router.put("/:id_prod", async(req,res)=>{
    let{id_prod} = req.params
    let productsToRepleace = req.body
    if (!productsToRepleace.description||!productsToRepleace.image||!productsToRepleace.price ||!productsToRepleace.stock){
        res.send({status: "error", error: "missing body params"})
    }
    let result = await productsModel.updateOne({_id: id_prod}, products)
    res.send({result:"success",playload:result})
})

router.delete("/:id_prod", async(req,res)=>{
    let{id_prod} = req.params
    let result = await productsModel.deleteOne({_id:id_prod})
    res.send({result:"success",playload:result})
})

export default router