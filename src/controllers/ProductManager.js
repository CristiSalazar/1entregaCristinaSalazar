// import {promises as fs} from "fs"
// import {nanoid} from "nanoid"

// class ProductManager {
//     constructor() {
//         this.path = "./src/models/products.json"
//     }

//     readProducts = async () => {
//         let products = await fs.readFile(this.path, "utf-8")
//         return JSON.parse(products)
//     }

//     writeProducts = async (product) => {
//         await fs.writeFile(this.path, JSON.stringify(product))
//     }

//     exist = async (id) => {
//         let products = await this.readProducts()
//         return products.find(prod => prod.id === id)
//     }

//     addProducts = async (product) => {
//         const {title, description, price, stock} = product
//         const numericPrice =parseFloat(price)
//         const numericStock = parseInt(stock)
//         console.log("datos del producto", product)

//         let productsOld = await this.readProducts()
//         product.id = nanoid()

//         let todosLosProductos = [...productsOld, product]
//         await this.writeProducts(todosLosProductos)
//         return "Producto Agregado"
//     }

//     getProducts = async () => {
//         return await this.readProducts()
//     }

//     getProductsById = async (id) => {
//         let productsById = await this.exist(id)
//         if (!productsById) return "Producto no existe"
//         return productsById
//     }


//     updateProducts = async(id, product) => {
//         let productsById = await this.exist(id)
//         if (!productsById) return "Producto no existe"
//         await this.deleteProducts(id)
//         let productsOld = await this.readProducts()
//         let products = [{...product, id:id}, ... productsOld]
//         await this.writeProducts(products)
//         return "El producto fue actualizado"
//     }

//     deleteProducts = async (id) => {
//         let products = await this.readProducts()
//         let existingProducts = products.some(prod => prod.id === id) 
//         if (existingProducts) {
//             let filterProducts = products.filter(prod => prod.id != id) 
//             await this.writeProducts(filterProducts)
//             return "Producto eliminado"
//         }
//         return "Producto que desea eliminar no existe"

//     }
// }

// export default ProductManager

