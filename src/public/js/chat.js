document.getElementById("username-form").addEventListener("submit", async(e) =>{
    e.preventDefault()

    const userInputElement = document.getElementById("usuario")
    const messageInputElement = document.getElementById("mensaje")

    const usuario = userInputElement.value
    const mensaje = messageInputElement.value

    try {
        const response = await fetch ("/api/msg",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({usuario, mensaje}),
        })
        
        if(response.ok){
            const responseData = await response.json
            const succesMessage = responseData.message

        .then((result) => {
            if(result.isConfirmed){
                location.reload()
            }
        })
        userInputElement.value = ""
        messageInputElement.value = ""
        }
        else {
            console.error("error al mandar mensaje")
        }
    } catch (error) {
        console.error("error", error)
    }
})