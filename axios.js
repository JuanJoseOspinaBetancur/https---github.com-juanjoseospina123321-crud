
const button = document.getElementById("button")
const enviar = document.getElementById("enviar")
const actu = document.getElementById("actu")
const botonEliminar = document.getElementById("botonEliminar")

botonEliminar.addEventListener("click", () => {
    const eliminar = document.getElementById("eliminar")
    const url = `https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user/${eliminar.value}`
    axios.delete(url).then(res => {console.log(res) 
        eliminar.value=''}).catch(err => console.log(err))
})


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
    }).then(res => {
        nombrep.value=''
        edadp.value=''
        trabajop.value=''
        idp.value=''
        actualizar.value=''
        console.log("es aca!!",res)

    }).catch(error => console.log(error))

})


button.addEventListener('click', () => {
    const url = "https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user";
    const imagen = document.getElementById("imagen")
    axios.get(url)
        .then(res => {
            const list = document.getElementById("list")
            list.innerHTML = ''
            const respuesta = res.data
            respuesta.map(respu => {
                const listItem = document.createElement("li")
                listItem.innerHTML = `
               <img src="${respu.avatar}" />
               <p>${respu.name}, ${respu.age}, ${respu.job}, ${respu.id}</p>
               `
                list.appendChild(listItem)
            })


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


    const url = 'https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user'

    axios.post(url, {
        name: nombre.value,
        age: edad.value,
        job: job.value,
        id: id.value,
    })
        .then(res => {
            nombre.value = '',
                edad.value = '',
                job.value = '',
                id.value = '',
                console.log(res)
        })
        .catch(error => console.log(error))

    /* axios({
        method: "POST",
        url: 'https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user',
        data: {
            name: nombre.value,
            age: edad.value,
            job: job.value,
            id: id.value,
        }
    }) */


})

// con asincronismo y promesas
async function llamar() {
    const url = 'https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user'

    const llamado = await axios.get(url)
        .then(res => {

            const list = document.getElementById("list")
            list.innerHTML = ''
            for (const userInfoss of res.data) {

                const elementli = document.createElement("li")
                elementli.innerHTML = `
                <p>${userInfoss.name}, ${userInfoss.age}, ${userInfoss.job}, ${userInfoss.id} </p>
                `
                list.appendChild(elementli)
            }

        })
        .catch(error => {
            console.log(error)
        })
}

// sin asincronismo ni promesas
function llamar2() {
    const url = "https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user";

    const extraer = axios.get(url)
        .then(res => {

            const list = document.getElementById("list")
            list.innerHTML = ''
            for (const userInfo of res.data) {

                const listItem = document.createElement("LI")
                listItem.textContent = `${userInfo.name} , ${userInfo.age}, ${userInfo.job}, ${userInfo.id}`
                list.appendChild(listItem)
            }

        })
        .catch(error => {
            console.log(error)
        })
}
/* ENSAYO FETCH------------------------------------------------------------------------------------------------ */
/* const url = "https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user";
data = {
    name: 'FETCH PRUEBA',
    age: 99,
    job: 'ENSAYO FETC',
    id: 900,
}

async function conFetch(url, data) {

    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
} */

const mandar = conFetch(url, data).then(response => console.log("OK", response)).catch(error => console.log("NO", error))

/* PUT con fetch */
/* 
const url1 = "https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user/1";
data1 = {
    name: 'FETCH PRUEBA PUT----',
    age: 992,
    job: 'ENSAYO FETC.....',
    id: 900,
}

async function fetchPut(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
} */
const mandar1 = fetchPut(url1, data1).then(response => console.log("OK", response)).catch(error => console.log("NO", error))



// con asincronismo y promesas------------------------y tambien mas sencillo--------------------------------
async function llamarsinnada() {
    const url = 'https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user'

    const llamado = await axios.get(url)
    const response = await llamado
    console.log(response.data)

}

async function mandarFacilPUT() {
    const url = 'https://62b8864c03c36cb9b7c878ad.mockapi.io/api/ejemplo/user'

    const data3 = {
        name: 'JUAN JOSE OSPINA',
        age: 00000,
        job: 'POST MAS FACIL',
        id: 900,
    }

    const llamado = await axios.post(url, data3)
    const response = await llamado
    console.log(response)

}