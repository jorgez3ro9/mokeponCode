const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const selectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []  // SE CREA UNA VARIABLE DE ARREGLOS O ARRAYS
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {        
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
// SE CREA LA CLASE PARA CREAR LAS PROPIEDADES DE LOS OBEJTOS GLOBALES

let hipodoge = new Mokepon('Hipodoge', './assets/Bulbasaur-PNG-Transparent-Image.png', 5) 

let capipepo = new Mokepon('Capipepo', './assets/147-1474793_squirtle-pokemon-squirtle.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/png-clipart-pokemon-charizard-charizard-pokemon-games-pokemon1.png', 5)

// SE CREA VARIABLES DONDE SE CREA UNA INSTANCIA DE UN TIPOS DE OBJETO DE LA CLASE MOKEPON Y SE CREAN LOS ATRIBUTOS

hipodoge.ataques.push (
    { nombre: '????', id: 'boton-agua'},
    { nombre: '????', id: 'boton-agua'},
    { nombre: '????', id: 'boton-agua'},
    { nombre: '????', id: 'boton-fuego'},
    { nombre: '????', id: 'boton-tierra'},  
)

capipepo.ataques.push (
    { nombre: '????', id: 'boton-tierra'},
    { nombre: '????', id: 'boton-tierra'},
    { nombre: '????', id: 'boton-tierra'},
    { nombre: '????', id: 'boton-agua'},
    { nombre: '????', id: 'boton-fuego'},   
)

ratigueya.ataques.push (
    { nombre: '????', id: 'boton-fuego'},
    { nombre: '????', id: 'boton-fuego'},
    { nombre: '????', id: 'boton-fuego'},
    { nombre: '????', id: 'boton-agua'},
    { nombre: '????', id: 'boton-tierra'}, 
)

mokepones.push(hipodoge,capipepo,ratigueya)



function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => { //METODO forEach PARA ITERAR LOS ARREGLOS DE MOKEPONES PARA HACERLOS DE FORMA AUTOMATICA Y NO MANUAL EN EL HTML  
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
           <p>${mokepon.nombre}</p>
           <img src=${mokepon.foto} alt=${mokepon.nombre} >
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })

    
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
        
        selectionSeleccionarMascota.style.display = 'none'                                  // METODO STYLE.DISPLAY OCULTAR LAS SECCIONES DE UN TEXTO 
        sectionSeleccionarAtaque.style.display = 'flex' //

        if (inputHipodoge.checked) {
            
            spanMascotaJugador.innerHTML = inputHipodoge.id
            mascotaJugador = inputHipodoge.id

    }else if(inputCapipepo.checked){ 
            
            spanMascotaJugador.innerHTML = inputCapipepo.id
            mascotaJugador = inputCapipepo.id

    }else if(inputRatigueya.checked){
            
            spanMascotaJugador.innerHTML = inputRatigueya.id
            mascotaJugador = inputRatigueya.id

    }else{
            alert('Selecciona una Mascota')
        }

        extraerAtaques(mascotaJugador)
        seleccionarMascotaEnemigo()  
}   

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques 
        }    
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){ // SE CRE LA FUNCION Y SE TRAE EL CODIGO BUTTON DEL HTML
    ataques.forEach((ataque) => {   
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    }) 
        
        botonFuego = document.getElementById('boton-fuego')
        botonAgua = document.getElementById('boton-agua')
        botonTierra = document.getElementById('boton-tierra')
        botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
        botones.forEach((boton) => {
            boton.addEventListener('click', (e) => {
                if (e.target.textContent === '????') {
                    ataqueJugador.push('FUEGO')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
                    boton.disabled = true
                } else if (e.target.textContent === '????') {
                    ataqueJugador.push('AGUA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58' 
                    boton.disabled = true
                } else {
                    ataqueJugador.push('TIERRA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
                    boton.disabled = true 
                }
                ataqueAleatorioEnemigo()
            })
        })
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatoria(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques 
    secuenciaAtaque() 
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatoria(0,ataquesMokeponEnemigo.length - 1) //identificar la posici??n / ??ndice del ??ltimo elemento de un arreglo 

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')   
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')   
    } else {
        ataqueEnemigo.push('TIERRA')
    }  
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() { // se crea una funcion para validar la longitud del arreglo para que no se imprima en pantalla varias veces
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() { // LA VALIDACION DE LOS AT

    for (let index = 0; index < ataqueJugador.length; index++) { // Un for para hacer un arreglo para que se imprima los ataques
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponente(index, index)
            crearMensaje( "??EMPATE! ????" )
        } else if ( ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' ) {
            indexAmbosOponente(index, index)
            crearMensaje( "??GANASTE! ????" )
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador     
        }else if ( ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO' ) {
            indexAmbosOponente(index, index)
            crearMensaje( "??GANASTE! ????" )
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if ( ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA' ) {
            indexAmbosOponente(index, index)
            crearMensaje( "??GANASTE! ????" )
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponente(index, index)
            crearMensaje( " PERDISTE... ????" );
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
            
        }                   
    }
    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("ESTO FUE UN EMPATE")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("FELICITACIONES GANASTE")
    }else{
        crearMensajeFinal('LO SIENTO, PERDISTE :(') 
    }
}

function crearMensaje(resultado){

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
   
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()

}

function aleatoria(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

