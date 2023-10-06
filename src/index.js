import express from "express"
import ProductRouter from "./router/product.routes.js"
import CartRouter from "./router/carts.routes.js"
import MessagesRouter from "./router/messages.routes.js"
import {engine} from "express-handlebars"
import ProductRouter from "./router/product.routes.js"
import UploadRouter from "./router/upload.routes.js"
import * as path from "path"
import __dirname from "./utils.js"
import ProductManager from "./controllers/ProductManager.js"
import { Server } from "socket.io"
import viewsRouter from "./router/views.routes.js"
import mongoose from "mongoose"


const app = express()
const PORT = 8080
const httpServer = app.listen(PORT,()=> console.log("Escuchando en puerto 8080"))


app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://cristinasalazar125:mong123456789@cluster0.tomc32z.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Conectado a database")
})
.catch(error => {
    console.error("Error al conectarse a database" + error)
})

app.use("/api/carts", CartRouter)
app.use("/api/msg", MessagesRouter)
app.use("/api/prod", ProductRouter)
app.use("/", UploadRouter)


app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))


app.use("/", express.static(__dirname + "/public"))

app.get("/chat", async(req,res)=> {
    res.render("chat", {
        title: "Chat con Mongoose"
    })
})



