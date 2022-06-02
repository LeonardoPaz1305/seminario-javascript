/* Ejercicios Funciones */

//1) Crear una funcion donde retorne su nombre, apellidos y fecha de nacimiento, guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.

const regresaDatos = () => ({
  nombre: "Claudia",
  apellidos: "Garibotto",
  fecha: '20 de abril'
});
console.log(regresaDatos());

//2) Cree una funcion donde pases los parametros booleano, String y number, al retornar que muestre el argumento pasado y que tipo de dato primitivo es.

function datos(booleano, string, number) {
  let tipoBooleano = typeof (booleano)
  let tipoString = typeof (string)
  let tipoNumber = typeof (number)

  return `soy ${booleano} y soy de tipo ${tipoBooleano}, soy ${string} y soy de tipo ${tipoString} soy ${number} y soy de tipo ${tipoNumber} `
}

const DATOS_TIPO = datos()

console.log(datos(true, 'claudia', 12345))


//3) Cree una funcion donde se calcule el area y perimetro de un Triangulo: base = 12cm, Altura = 15cm, Lado = 16,16cm, guardar la funcion en una variable pasando los argumentos y que la respuesta sea elaborada.

const triangulo = (base, altura, lado) => {
  let area = (base * altura) / 2
  let perimetro = base + (2 * lado)
  console.log(`el area del triangulo es ${area} y su perimetro ${perimetro}`)
}

triangulo(12, 15, 16.16)


//4) Cree una funcion donde se calcule el area de un cuadrado cuyos cuatro lados son todos iguales de longitud a=5 cm.

const cuadrado = (lado) => {
  let area = lado ** 2
  console.log(`El area del cuadrado es ${area}`)
}
cuadrado(5)

//5) Plasme en un funcion el calculo del diametro de un circulo cuyo radio es 6, guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.
const circulo = (radio) => {
  let diametro = 2 * radio
  console.log(`El diametro del circulo es : ${diametro}`)
}
circulo(6)

//6) La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla.
/*
function multiply(a, b){
    a * b
  }
*/

function multiply(a, b) {
 return a * b
}

multiply(4,5)


//7) Reducir la función en una sola linea, almacenar la funcion en una variable y luego por consola mostrar el resultado
// function operacionCombinada(a, b){
//     let resultado = (a * b) + (b / a);
//     return resultado;
// }

const operacionCombinada = (a,b) => (a * b) + (b / a);

console.log(operacionCombinada(5,6))


//8) De la siguiente frase "Como yo siempre digo, Primero muerto antes que perder la vida!" interpretarla en una funcion CALLBACK


function frase(letras) {
  let mensaje = letras ;
  return(mensaje);
}

function imprimir(mensaje) {
  console.log(mensaje);
}

frase("Como yo siempre digo, Primero muerto antes que perder la vida!", imprimir);
