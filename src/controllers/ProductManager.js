import {promises as fs} from "fs"

class ProductManager {
    constructor() {
        this.path = "./src/models/products.json"
    }

    readProducts = async () => {
        let products = await fs.readFile(this.path, "utf-8")
        return JSON.parse(products)
    }

    writeProducts = async (product) => {
        let productsOld = await this.readProducts()
        let todosLosProductos = [...productsOld, product]
        await fs.writeFile(this.path, JSON.stringify(todosLosProductos))
        return "Producto Agregado"
    }

    getproducts = async () => {

    }
}

export default ProductManager

