/*

if(true) {
    //ejecuta esto
}

*/

if (false) {
    console.log('Estoy dentro del if');
}

//////////////////////////////////////

let password = '1234567';

if (password.length >= 8) {
    console.log('tu contraseña cumple con la seguridad');
}

//////////////////////////////////////

let nombre = '';

if (nombre.length >= 3) {
    console.log('El nombre no esta vacio');
}



////////////////////////////////////////////////////////////////////////////////

let jugador = 0;

if (jugador >= 1) {
    console.log('Aun mantienes tu vida');
    console.log('Tienes aun mucho por vivir');
    console.log('Sigue asi..');
} else {
    console.log('Game Over');
    console.log('Sigue intentando');
}

console.log('Continua el programa');

//Ejercicio 1)
/*Realizar un ejercicio en el cual se definan las variables necesarias para solicitar una “edad”, un “nombre” y “país”. Una vez definidas las
variables se ha de visualizar un mensaje en la consola que diga “En el Pais de "nombre pais" eres Mayor de Edad” o “En el Pais de "nombre pais" eres Menor de Edad”, 
dependiendo de que la edad introducida sea mayor o menor de 18 años.

Visualizar un mensaje que diga “Hola” y visualice también el nombre introducido en la variable, 
siempre y cuando la variable sea distinta de nada.*/

//ejercicio resuelto

let nombres = "Leonardo";
let edad = 27;
let pais = "Perú";

if (nombres != "") {
    console.log(`Hola mi nombre es ${nombres}`);
}

if (edad >= 18) {
    console.log(`En el Pais de ${pais} eres Mayor de Edad`);
} else {
    console.log(`En el Pais de ${pais} eres Menor de Edad`);
}


//Ejercicio 2)
/* 
Realizar un ejercicio en el cual se definan las siguientes variables 
“precio_kilometro”, 
“vehiculo”, 
“kms_recorridos”, 
“litros_consumidos”. 

A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones.

Si el vehículo es “coche”, el precio kilometro ha de ser 0.10, 
si es “moto” ha de ser 0.20 y 
si es “autobús” 0.5. 

si los litros consumidos están entre 0 y 100 se ha de añadir 1 al total, si es mayor la cantidad de litros consumidos se ha de añadir 2 al total.

*/

let precio_kilometro = 0;
let vehiculo = "coche";
let kms_recorridos = 10;
let litros_consumidos = 120;

if (vehiculo == "coche") {
    precio_kilometro = 0.10;
}
if (vehiculo == "moto") {
    precio_kilometro = 0.20;
}
if (vehiculo == "autobus") {
    precio_kilometro = 0.50;
}

let totalkms = 0;
let total = 0;

totalkms = kms_recorridos * precio_kilometro; // 144 * 0.10

if (litros_consumidos <= 100) { // si litros consumidos es mayor a 100 suma 1 sino suma 2
    total = totalkms + 1;
} else {
    total = totalkms + 2;
}

//mensaje en consola
console.log(`Tipo de vehiculo: ${vehiculo}`);
console.log(`Kilometros recorridos x Precio del kilometro = ${totalkms}`);
console.log(`Total Presupuesto: S/ ${total}`);