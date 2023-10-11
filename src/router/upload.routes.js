// import { Router } from "express";
// import { uploader } from "../controllers/multer.js";

// const UploadRouter = Router()

// let products = []

// UploadRouter.get("/", (req,res)=> {
//     res.send({status:"succes", playload: products})
// })

// UploadRouter.post("/upload", uploader.single("file"),(req, res)=>{
//     if(!req.file){
//         return res.status(404).send({status:"error", error: "no se pudo guardar"})
//     }
//     let prod = req.body
//     prod.profile = req.file.path
//     products.push(prod)
//     res.send({status:"succes", message:"imagen guardada"})
// })
// export default UploadRouter