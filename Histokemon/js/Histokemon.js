const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonRandom = document.getElementById("Boton-random")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("selecciona-tu-random")
const spanMascotaJugador = document.getElementById("random-jugador")

const spanMascotaEnemigo = document.getElementById("random-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDeJugador = document.getElementById("ataques-de-jugador")
const ataquesDeEnemigo = document.getElementById("ataques-de-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjeras")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let histokemones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeHistokemones
let inputTesli
let inputNerun
let inputJehovi
let inputVexen
let inputAtlan
let mascotaJugador
let ataquesHistokemon
let ataquesRandomEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let ataquePlayer = []
let vidasJugador = 3
let vidasEnemigo = 3

class Histokemon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let tesli = new Histokemon("Tesli", "./assets/pixel-art-steam-workshop-room-taeqq40zcd7aose3.gif", 5)

let nerun = new Histokemon("Nerun", "./assets/nerun.gif", 5)

let jehovi = new Histokemon("Jehovi", "./assets/jehovi.gif", 5)

let vexen = new Histokemon("Vexen", "./assets/Vexen.gif", 5)

let atlan = new Histokemon("Atlan", "./assets/Atlan.gif", 5)

tesli.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierrita"},
)

nerun.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierrita"},
)

jehovi.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierrita"},
    { nombre: "🌱", id: "boton-tierrita"},
    { nombre: "🌱", id: "boton-tierrita"},
)

vexen.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierrita"},
    { nombre: "🌱", id: "boton-tierrita"}, 
)

atlan.ataques.push(
    { nombre: "💧", id: "boton-agua"},
    { nombre: "💧", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🌱", id: "boton-tierrita"},
    { nombre: "🌱", id: "boton-tierrita"}, 
)

histokemones.push(tesli, nerun, jehovi, vexen, atlan)


function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = "none"

    histokemones.forEach((histokemon) => {
        opcionDeHistokemones = `
        <input type="radio" name="Random" id=${histokemon.nombre} />
        <label class="tarjeta-de-histokemon" for=${histokemon.nombre}>
            <p class="cosa">${histokemon.nombre}</p>
            <img src=${histokemon.foto} alt=${histokemon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeHistokemones

     inputTesli = document.getElementById("Tesli")
     inputNerun = document.getElementById("Nerun")
     inputJehovi = document.getElementById("Jehovi")
     inputVexen = document.getElementById("Vexen")
     inputAtlan = document.getElementById("Atlan")

    })

    sectionReiniciar.style.display = "none"
    botonRandom.addEventListener("click" , seleccionarRandomJugador)
    
    botonReiniciar.addEventListener("click" , reintentarJuego)
}

function seleccionarRandomJugador() {
    
    sectionSeleccionarMascota.style.display = "none"
    
    sectionSeleccionarAtaque.style.display = "flex"
  
    if (inputTesli.checked) {
        spanMascotaJugador.innerHTML = inputTesli.id
        mascotaJugador = inputTesli.id
    } else if (inputNerun.checked) {
        spanMascotaJugador.innerHTML = inputNerun.id
        mascotaJugador = inputNerun.id
    } else if (inputJehovi.checked) {
        spanMascotaJugador.innerHTML = inputJehovi.id
        mascotaJugador = inputJehovi.id
    } else if (inputVexen.checked) {
        spanMascotaJugador.innerHTML = inputVexen.id
        mascotaJugador = inputVexen.id
    } else if (inputAtlan.checked) {
        spanMascotaJugador.innerHTML = inputAtlan.id
        mascotaJugador = inputAtlan.id         
    } else {
        alert("Haz una elección")
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()  
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < histokemones.length; i++) {
        if (mascotaJugador === histokemones[i].nombre) {
            ataques = histokemones[i].ataques
        }
        
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesHistokemon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesHistokemon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierrita")
    botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.innerText === "🔥") {
                ataquePlayer.push("Candela")
                console.log(ataquePlayer)
                boton.style.background = "#000000"
                boton.disabled = true
            }else if (e.target.innerText === "💧") {
                ataquePlayer.push("Agua")
                console.log(ataquePlayer)
                boton.style.background = "#000000"
                boton.disabled = true
            }else {
                ataquePlayer.push("Pasto")
                console.log(ataquePlayer)
                boton.style.background = "#000000"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0,histokemones.length -1)

    spanMascotaEnemigo.innerHTML = histokemones[mascotaAleatoria].nombre
    ataquesRandomEnemigo = histokemones[mascotaAleatoria].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesRandomEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("Candela") 
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("Agua") 
    } else {
        ataqueEnemigo.push("Pasto") 
    }
    console.log(ataqueEnemigo)
    iniciarPelea()   
}

function iniciarPelea() {
    if (ataquePlayer.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataquePlayer[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let index = 0; index < ataquePlayer.length; index++) {
        if(ataquePlayer[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("Empate")
        } else if (ataquePlayer[index] === "Candela" && ataqueEnemigo[index] === "Pasto") {
            indexAmbosOponentes(index, index)
            crearMensaje("Victoria")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataquePlayer[index] === "Agua" && ataqueEnemigo[index] === "Candela") {
            indexAmbosOponentes(index, index)
            crearMensaje("Victoria")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador           
        } else if (ataquePlayer[index] === "Pasto" && ataqueEnemigo[index] === "Agua") {
            indexAmbosOponentes(index, index)
            crearMensaje("Victoria")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador 
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("Derrota")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }    
        
    }

    revisarVidas()
}

function revisarVidas( ) {
    if(victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("Papá estaría orgulloso.")
        alert("victoria!")
    } else if(victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Vaya, un empate.")
    } else {
        crearMensajeFinal("Bro?🙎‍♂️")
        alert("Ja.")
    }
}

function crearMensaje(resultado) {
    
    let nuevoAtaqueDeJugador = document.createElement("p")
    let nuevoAtaqueDeEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDeJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDeEnemigo.innerHTML = indexAtaqueEnemigo
    
    
    ataquesDeJugador.appendChild(nuevoAtaqueDeJugador)
    ataquesDeEnemigo.appendChild(nuevoAtaqueDeEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal
    
    sectionReiniciar.style.display = "block"
}

function reintentarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
}

window.addEventListener("load" , iniciarJuego)