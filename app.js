let numeroSecreto;
let intentos;
let listaNumerosSecretos = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Adivinaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario');
  valorCaja.value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  if (listaNumerosSecretos.length == numeroMaximo) {
      asignarTextoElemento("p", "El juego a terminado");
  } else {
    if (listaNumerosSecretos.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSecretos.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  // Limpiar caja
  limpiarCaja();
  // Indicar mensaje de intervalo de numero
  // Generar numero aleatorio
  // Inicializar el numero de intentos
  condicionesIniciales();
  // Deshabilitar boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();

