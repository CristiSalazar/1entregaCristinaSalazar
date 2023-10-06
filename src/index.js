import express from "express"
import ProductRouter from "./router/product.routes.js"
import CartRouter from "./router/carts.routes.js"
import {engine} from "express-handlebars"
import * as path from "path"
import __dirname from "./utils.js"
import ProductManager from "./controllers/ProductManager.js"
import { Server } from "socket.io"
import viewsRouter from "./router/views.routes.js"
import mongoose from "mongoose"


const app = express()
const PORT = 8080
const httpServer = app.listen(PORT,()=> console.log("Escuchando en puerto 8080"))
// const product = new ProductManager()
// const SocketServer = new Server(httpServer)

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
app.use("/api/msg", messagesRouter)
app.use("/api/prod", ProductRouter)
app.use("/", uploadRouter)


app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.resolve(__dirname + "/views"))
// app.set("views", __dirname + "/views")
// app.use("/", viewsRouter)

app.use("/", express.static(__dirname + "/public"))

app.get("/chat", async(req,res)=> {
    res.render("chat", {
        title: "Chat con Mongoose"
    })
})

// app.get("/realtimeproducts", (req, res)=> {
//     res.render("realTimeProducts")
// })

// SocketServer.on("connection", (socket) => {
//     console.log(`Usuario ${socket.id}`);

//     socket.on("addProduct", async (productData) => {
//         console.log('Datos del producto recibidos', productData)
//         const result = await product.addProducts(productData);

//         if (result === "Producto Agregado") {
//             SocketServer.emit("productAdded", productData);
//         }
//     });
// });

// app.get("/", async(req,res) => {
//     let todosLosProductos= await product.getProducts()
//     res.render("home",{
//         title: "handlebars",
//         products: todosLosProductos
//     })
// })

// app.get("/:id", async (req, res) => {
//     let id = parseInt(req.params.id)
//     let prod = await product.getProductsById(id)
//     res.render("prod", {
//         title: "handlebars",
//         products : prod
//     })
// })



// app.use("/api/products", ProductRouter)
// app.use("/api/cart", CartRouter)

