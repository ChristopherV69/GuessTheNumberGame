let random = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let vidas = 3; 



function asignarTextoElemento(elemento , texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    if (numeroDeUsuario === random){
        asignarTextoElemento('p', `Felicidades, acertaste el numero secreto en ${intentos} ${intentos === 1 ? "Intento" : "Intentos"}`)
        document.getElementById('reiniciar').removeAttribute("disabled")
        

       //En caso de que el usuario no acierte el numero secreto //
    } else {
        if (numeroDeUsuario > random){
            asignarTextoElemento('p', "El numero secreto es menor")
        } else{
            asignarTextoElemento('p', "El numero secreto es mayor")
        }
        intentos++;
        LimpiarCaja()
    }
         
    
}

//Esta funcion que sigue es para limpiar el imput donde el usuario coloca su numero.

function LimpiarCaja() {
    document.querySelector("#ValorUsuario").value = "";
    
}

// Esta funcion genera un numero random //

function NumeroAleatorio() {
    let NumeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    console.log(NumeroGenerado);
    // si ya se sortearon todos los numero va a correr este if // 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "Ya encontraste todos los numero secretos.");
        
    } else {
        // si el numero incluido ya esta en la lista nos da otro numero nuevo.
        if (listaNumerosSorteados.includes(NumeroGenerado)){
            return NumeroAleatorio()    
        } else {
            listaNumerosSorteados.push(NumeroGenerado)
            return NumeroGenerado;
            
        } 
    }
   
}




//Esta funcion almacena los textos iniciales del juego
function condicionesIniciales(){
    asignarTextoElemento('h1' , "Juego del numero secreto"); 
    asignarTextoElemento('p', `Escribe un numero entre el 1 y ${numeroMaximo} =`)
    random = NumeroAleatorio()
    intentos = 1;
}





//Esta funcion reinicia el juego//
function ReiniciarJuego() {
    //primer paso tenemos que limpiar la caja//
    LimpiarCaja();
    //segundo paso indicar nuevamente en que consite el juego//
    condicionesIniciales()
    //deshabilitar el boton//
    document.getElementById('reiniciar').setAttribute("disabled", "true")
    
      
}




//activamos esta funcion desde ya para que se le anadans los atributos al juego al puro inicio.


condicionesIniciales()
asignarTextoElemento('h1' , "Juego del numero secreto"); 
asignarTextoElemento('p', "Escribe un numero entre el 1 y 10 = ")
