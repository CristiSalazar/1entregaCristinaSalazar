import express from "express"
// import ProductRouter from "./router/product.routes.js"
import cartsRouter from "./router/carts.router.js"
import messagesRouter from "./router/messages.router.js"
import {engine} from "express-handlebars"
// import ProductRouter from "./router/product.routes.js"
// import UploadRouter from "./router/upload.routes.js"
import * as path from "path"
import __dirname from "./utils.js"
import mongoose from "mongoose"


const app = express()
const PORT = 8080
app.listen(PORT,()=>{console.log("Escuchando en puerto 8080")})


app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://cristinasalazar125:m123456789@cluster0.tomc32z.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Conectado a la base de datos")
})
.catch(error => {
    console.error("Error al conectarse a la base de datos" + error)
})

app.use("/api/carts", cartsRouter)
app.use("/api/msg", messagesRouter)
// app.use("/api/prod", ProductRouter)
// app.use("/", UploadRouter)


app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))


app.use("/", express.static(__dirname + "/public"))

app.get("/chat", async(req,res)=> {
    res.render("chat", {
        title: "Chat con Mongoose"
    })
})



