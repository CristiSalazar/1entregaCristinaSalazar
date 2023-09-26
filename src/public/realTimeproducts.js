const socket = io()
socket.emit("message", "Comuncándose desde un webSocket")

socket.on("productAdded", (product) => {
    const newProductElement = document.createElement("div");
    newProductElement.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
    `;

    const productsContainer = document.getElementById("productsContainer");
    productsContainer.appendChild(newProductElement);
});