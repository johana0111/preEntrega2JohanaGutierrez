//Declaracion de variables

let opcion



// Definicion de array de objetos principal "Personajes"
const visiones = ['pyro', 'hydro', 'anemo', 'dendro', 'geo', 'cryo', 'electro']

const armas = ['arco', 'lanza', 'mandoble', 'espada', 'catalizador']

const personajes = [
    {nombre: "xiao", arma: "lanza", vision: "anemo" },    
    {nombre: "venti" , arma: "arco" , vision: "anemo"},
    {nombre: "heizou" , arma: "catalizador" , vision: "anemo"},
    {nombre: "yelan" , arma: "arco" , vision: "hydro"},
    {nombre: "ayato" , arma: "espada" , vision: "hydro"},
    {nombre: "barbara" , arma: "catalizador" , vision: "hydro"},
    {nombre: "chongyun" , arma: "mandoble" , vision: "cryo"},
    {nombre: "rosaria" , arma: "lanza" , vision: "cryo"},
    {nombre: "ganyu" , arma: "arco" , vision: "cryo"},
    {nombre: "hutao" , arma: "lanza" , vision: "pyro"},
    {nombre: "diluc" , arma: "mandoble" , vision: "pyro"},
    {nombre: "yanfei" , arma: "catalizador" , vision: "pyro"},
    {nombre: "cyno" , arma: "lanza" , vision: "electro"},
    {nombre: "razor" , arma: "mandoble" , vision: "electro"},
    {nombre: "keching" , arma: "espada" , vision: "electro"},
    {nombre: "collei" , arma: "arco" , vision: "dendro"},
    {nombre: "tignari" , arma: "arco" , vision: "dendro"},
    {nombre: "kusanali" , arma: "catalizador" , vision: "dendro"},
    {nombre: "itto" , arma: "mandoble" , vision: "geo"},
    {nombre: "zhongli" , arma: "lanza" , vision: "geo"},
    {nombre: "ninguang" , arma: "catalizador" , vision: "geo"}
]
//Clases 

class personaje {
    constructor(nombre, arma, vision){
        this.nombre= nombre;
        this.arma= arma;
        this.vision= vision;
    }
   //Aqui mas metodos, coming soon :) 
}

//funciones
function menuPrincipal(){
    console.log("-----------------------------------------")
    console.log("1- Agregar personaje ")
    console.log("2- Ver personajes")
    console.log("3- Salir")
    opcion = prompt("Ingrese una opcion: ")
    switch(opcion){
        case "1" :
                agregarPersonaje()
            break;
            
        case "2":
                subMenu()
            break;
                    
        case "3" :            
            salir()
            break; 
        default:
            console.log("Operacion invalida")            
    }
}

function subMenu(){
    console.log("-----------------------------------------")
    console.log("1- ver todos los personajes ")
    console.log("2- Filtrar por tipo de arma ")
    console.log("3- Filtrar por vision elemental")
    console.log("4- Buscar por nombre")    
    console.log("5- Volver atras")
    opcion = prompt("Ingrese una opcion: ")

    switch(opcion){
        case "1" :
             verPersonajes()
            break;
        
         case "2":
           tipoDeArma()
            break;
                
        case "3":
            tipoDeVisionElemental()
            break;
        case "4":
            buscarPorNombre()
             break;
        case "5" :            
            menuPrincipal()
            break; 
        default:
        console.log("Operacion invalida")   
    }
    
}

function agregarPersonaje(){ 
    const nombre = prompt("Ingrese el nombre de su personaje")
    const arma = (prompt("Ingrese el arma de su personaje")).toLowerCase
    const vision = (prompt("Ingrese la vision de su personaje")).toLowerCase
   
    let existeArma = armas.indexOf(arma)
    let existeVision = visiones.indexOf(vision)

    if(existeArma >= 0 && existeVision >= 0 ){
        let nuevoPersonaje = new personaje(nombre, arma, vision);          
        personajes.push(nuevoPersonaje)
        console.log(nuevoPersonaje.creacion())
  }else{
    console.log("La vision o el arma no son compatibles con teyvat")
  }
  menuPrincipal()


}
function verPersonajes(){
 console.table(personajes)
 subMenu()
}

function tipoDeArma(){
    //armatipo es arma ingresada por el usuario
    console.log("------------Filtro por tipo de arma------------")
    console.log("-----------------------------------------------")
    const armatipo = (prompt("Ingrese el tipo de arma que desea filtrar -- arco, lanza, espada, catalizador y mandoble")).toLowerCase()
   const existeArma = armas.indexOf(armatipo)
     if(existeArma >= 0){
        const filtroPorArma = personajes.filter((el) => el.arma.includes(armatipo))
        console.table(filtroPorArma)
     }else {
        console.log("El arma ingresada no es correcta")
     }
    subMenu()
   
}

function tipoDeVisionElemental(){

    console.log("------------Filtro por vision elemental------------")
    console.log("---------------------------------------------------")
    const tipoDeVision = (prompt("Ingrese el tipo de vision elemental que desea filtrar Pyro, hydro, anemo, electro, dendro, geo o cryo")).toLowerCase()

    const existeVision = visiones.indexOf(tipoDeVision)
    if(existeVision >= 0){
        const filtroPorVision = personajes.filter((el) => el.vision.includes(tipoDeVision))
        console.table(filtroPorVision)
     }else {
        console.log("La vision ingresada no es correcta")
     }
    subMenu()

}

function buscarPorNombre(){
    console.log("------------Filtro por nombre del personaje------------")
    console.log("---------------------------------------------------")
    const buscarNombre = (prompt("¿a quien buscas?")).toLowerCase()
    const existeNombre = personajes.some((el) => el.nombre === buscarNombre)
    
    if(existeNombre === true){
        console.table(personajes.filter((el) => el.nombre === buscarNombre))
    }else{
        console.log("No exist un personaje llamado " + buscarNombre)
    }
    subMenu()
}


function salir() { alert("Fin del proceso") }

// Ejecucion inicial

menuPrincipal()