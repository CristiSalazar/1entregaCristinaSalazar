import { Router } from "express";
import { messagessModel } from "../models/messages.model.js";

const router = Router()

router.get("/", async(req,res) => {
    try{
        let messages = await messagessModel.find()
        res.send({result: "succes", playload: messages})
    }
    catch(error){
        console.log(error)
    }
})

router.post("/", async(req, res) => {
    let {user, message} = req.body
    if (!user || !message){
        res.send({status: "error", error: "Faltan datos"})
    }
    let result = await messagessModel.create({user,message})
    res.send({result:"succes", playload:result})
})

router.put("/:mid", async(req,res)=>{
    let{mid} = req.params
    let messagesToRepleace = req.body
    if (!messagesToRepleace.user||!messagesToRepleace.message){
        res.send({status: "error", error: "Faltan datos"})
    }
    let result = await messagessModel.updateOne({_id: mid}, messagesToRepleace)
    res.send({result:"success",playload:result})
})

router.delete("/:mid", async(req,res)=>{
    let{mid} = req.params
    let result = await messagessModel.deleteOne({_id:mid})
    res.send({result:"success",playload:result})
})

export default router