document.getElementById("username-form").addEventListener("submit", async(e) =>{
    e.preventDefault()

    const userInputElement = document.getElementById("usuario")
    const messageInputElement = document.getElementById("mensaje")

    const usuario = userInputElement.value
    const mensaje = messageInputElement.value
})