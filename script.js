//generamos el numero aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//Capturamos el dato del "input" del HTML
let numeroEntrada = document.getElementById('numeroEntrada');

//Capturamos el mensaje
let mensaje = document.getElementById('mensaje');

//Capturamos los intentos
let intento = document.getElementById('intento');

let intentos = 0; //Contador

//Esta accion se va a ejecutar cuando le demos click en el boton "comprobar"
function chequearResultado() {
    intentos ++;

    intento.textContent = intentos;

    let numeroIngresado = parseInt(numeroEntrada.value);  //lo pasamos a int porque los input de HTML siempre devuelven string

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100';
        mensaje.style.color = 'red';
        return; //Con return salimos de la funcion
    }

    if (numeroIngresado === numeroAleatorio) {
        mensaje.textContent = 'Felicitaciones!!! Has adivinado el numero.';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAleatorio) {
        mensaje.textContent = '!Mas alto¡ El numero debe ser mayor al que elegiste.';
        mensaje.style.color = 'red';
    }else {
        mensaje.textContent = '!Mas bajo¡ El numero debe ser menor al que elegiste.';
        mensaje.style.color = 'red';
    }

}