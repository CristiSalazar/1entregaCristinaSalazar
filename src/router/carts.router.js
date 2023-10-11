import {Router} from "express"
import {cartModel} from "../models/carts.models.js" 


const router = Router()

router.get("/", async(req,res) => {
    try{
        let carts = await cartModel.find()
        res.send({result: "succes", playload: carts})
    }
    catch(error){
        console.log(error)
    }
})

router.post("/", async(req, res) => {
    let {title, description, price, stock} = req.body
    if (!title || !description || price || !stock){
        res.send({status: "error", error: "Faltan datos"})
    }
    let result = await cartModel.create({title, description, price, stock})
    res.send({result:"succes", playload: result})
})

router.put("/:cid", async(req,res)=>{
    let{cid} = req.params
    let cartsToRepleace = req.body
    if (!cartsToRepleace.title||!cartsToRepleace.description||!cartsToRepleace.price||!cartsToRepleace.stock){
        res.send({status: "error", error: "Faltan datos"})
    }
    let result = await cartModel.updateOne({_id: cid}, cartsToRepleace)
    res.send({result:"success", playload: result})
})

router.delete("/:cid", async(req,res)=>{
    let{cid} = req.params
    let result = await cartModel.deleteOne({_id:cid})
    res.send({result:"success", playload: result})
})

export default router