
const button = document.getElementById("button")
const enviar = document.getElementById("enviar")
const actu = document.getElementById("actu")
const botonEliminar=document.getElementById("botonEliminar")

console.log(botonEliminar)

actu.addEventListener("click", () => {
    const nombrep = document.getElementById("nombrep").value
    const edadp = document.getElementById("edadp").value
    const trabajop = document.getElementById("trabajop").value
    const idp = document.getElementById("idp").value
    const actualizar = document.getElementById("actualizar").value

    const url = `https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user/${actualizar}`
    axios.put(url, {
        name: nombrep,
        age: edadp,
        job: trabajop,
        id: idp
    }).then(res => console.log(res)).catch(error => console.log(error))

})


button.addEventListener('click', () => {
    axios({
        method: "GET",
        url: "https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user"

    }).then(res => {

        const list = document.getElementById("list")
        const fragment = document.createDocumentFragment(list)



        for (const userInfo of res.data) {
            console.log(userInfo)

            const listItem = document.createElement("LI")
            listItem.textContent = `${userInfo.name} , ${userInfo.age}, ${userInfo.job}, ${userInfo.id}`
            console.log(listItem)
            fragment.appendChild(listItem)
        }
    })
        .catch(error => {
            console.log(error)
        })


})

enviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre")
    const edad = document.getElementById("edad")
    const job = document.getElementById("job")
    const id = document.getElementById("id")

    axios({
        method: "POST",
        url: 'https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user',
        data: {
            name: nombre.value,
            age: edad.value,
            job: job.value,
            id: id.value,
        }
    }).then(res => console.log(res))
        .catch(error => console.log(error))
})


