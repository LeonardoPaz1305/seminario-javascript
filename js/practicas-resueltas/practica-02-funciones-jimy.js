/* Ejercicios Funciones */

//1) Crear una funcion donde retorne su nombre, apellidos y fecha de nacimiento,
// guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.

function datosPersona(nombre, apellidos, fechaCumpleaño) {
    return console.log(`Mi Nombres es : ${nombre}`, `Mi Apellido es : ${apellidos}`, `Mi fecha de cumpleaños es : ${fechaCumpleaño}`);
}

datosPersona('Jimy', 'Huaraca Gutierrez', '29-06-1999');

//2) Cree una funcion donde pases los parametros booleano, String y number,
// al retornar que muestre el argumento pasado y que tipo de dato primitivo es.

function parametros(boolean, string, number) {
    let tipoBoolean = typeof(boolean);
    let tipoString = typeof(string);
    let tipoNumber = typeof(number);

    return `Soy ${boolean} y soy de tipo ${tipoBoolean}`, `Soy ${string} y soy de tipo ${tipoString}`, `Soy ${number} y soy de tipo ${tipoNumber}`;
}

console.log(parametros(true, 'Jimy', 29));

//3) Cree una funcion donde se calcule el area y perimetro de un Triangulo:
// base = 12cm, Altura = 15cm, Lado = 16,16cm, guardar la funcion en una variable
// pasando los argumentos y que la respuesta sea elaborada.

let triangulo = (base, altura, lado) => {
    let area = (base * altura) / 2;
    let perimetro = base + (lado * 2);
    console.log("El area del triangulo es : " + area, " y el perimetro es : " + perimetro);
}

triangulo(12, 15, 16.16);

//4) Cree una funcion donde se calcule el area de un cuadrado cuyos cuatro lados son todos iguales de longitud a=5 cm.

let cuadrado = (lado) => {
    let area = lado ** 2;
    console.log("El area del cuadrado es: " + area);
}

cuadrado(5);

//5) Plasme en un funcion el calculo del diametro de un circulo cuyo radio es 6, 
//guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.

let circulo = (radio) => {
    let diametro = 2 * radio;
    console.log("El diametro del circulo es: " + diametro);
}

circulo(5);

//6) La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla.


function multiply(a, b) {
    let resultado = a * b;
    console.log("La multiplicacion es: " + resultado);
}

multiply(5, 4);


//7) Reducir la función en una sola linea, almacenar la funcion en una variable
// y luego por consola mostrar el resultado
// function operacionCombinada(a, b){
//     let resultado = (a * b) + (b / a);
//     return resultado;
// }

const operacionCombinada = (a, b) => a * b + a / b;
console.log(operacionCombinada(3, 4));

//8) De la siguiente frase "Como yo siempre digo, Primero muerto antes que perder la vida!" interpretarla en una funcion CALLBACK

function frase(texta, textb, textcompleto) {
    let completo = texta + textb;
    textcompleto(completo);
}

function imprimir(mensaje) {
    console.log(`${mensaje}`)
}

frase('Como yo siempre digo,', ' Primero muerto antes que perder la vida!', imprimir);