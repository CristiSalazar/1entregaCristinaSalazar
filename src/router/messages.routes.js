import { Router } from "express";
import { messagessModel } from "../models/messages.model.js";

const MessagesRouter = Router

MessagesRouter.get("/", async(req,res) => {
    try{
        let mensajes = await messagessModel.find()
        res.send({result: "succes", playload: messages})
    }
    catch(error){
        console.log(error)
    }
})

MessagesRouter.post("/", async(req, res) => {
    let {usuario, mensajes} = req.body
    if (!usuario || !mensajes){
        res.send({status: "error", error: "missing body params"})
    }
    let result = await messagessModel.create({user,message})
    res.send({result:"succes", playload:result})
})

MessagesRouter.put("/:id_msg", async(req,res)=>{
    let{id_msg} = req.params
    let messagesToRepleace = req.body
    if (!messagesToRepleace.usuario||!messagesToRepleace.mensajes){
        res.send({status: "error", error: "missing body params"})
    }
    let result = await messagessModel.updateOne({_id: id_msg}, mensajes)
    res.send({result:"success",playload:result})
})

MessagesRouter.delete("/:id_msg", async(req,res)=>{
    let{id_msg} = req.params
    let result = await messagessModel.deleteOne({_id:id_msg})
    res.send({result:"success",playload:result})
})

export default MessagesRouter