//1) Escriba una función javascript para comprobar si una 'entrada' es una matriz o no.

let listaArray = [7, 8, 9]
console.log(Array.isArray(listaArray))

//2) Escribir una función JavaScript para clonar un Array.

let Lista1 = [14, 75, 23, 98, 53];
let Lista2 = [];

for (let i = 0; i < Lista1.length; i++) {
    Lista2.push(Lista1[i]);
}
console.log(Lista2)

//3) Escriba una función JavaScript para obtener el primer elemento de un Array. 
//Pasar un parámetro 'n' devolverá los primeros 'n' elementos del Array.

let arrayElemento = ["z", "y", "d", "g"];
console.log(arrayElemento[0])
let NuevoParametro = arrayElemento.unshift('e');
console.log(arrayElemento)

//4) Escriba una función JavaScript para obtener el último elemento de un Array. 
//Pasar un parámetro 'n' devolverá los últimos 'n' elementos del Array.

let arrayUltimo = [0, 8, 16, 24, 32];
const getLastArrItem = (arr) => {
    let ultimoItem = arr[arr.length - 1];
    console.log(`El ultimo elemento es: ${ultimoItem}`);
}
getLastArrItem(arrayUltimo);

let NuevoParametro2 = arrayUltimo.push(10);
console.log(arrayUltimo)

//5) Escriba un programa JavaScript simple para unir todos los elementos de la siguiente matriz en una cadena.
// Matriz de muestra: colores = ["Rojo", "Verde", "Blanco", "Negro"]

Arraycolores = ["Rojo", "Verde", "Blanco", "Negro"]
console.log(Arraycolores.join());

//6) Escriba un programa JavaScript para ordenar los elementos de una matriz.
// Matriz de muestra: numEnteros = [ -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1 ];

nroEnteros = [-3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1];
console.log(nroEnteros.sort())
console.log(nroEnteros.sort(function(a, b) { return a - b }))

//7) Escriba un programa JavaScript que imprima los elementos de la siguiente matriz.
// Matriz de muestras: let matrices = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Ejemplo de salida:
/*
    Fila 0
      1
      2
      1
      24
    Fila 1
      8
      11
      9
      4
*/

const printMatriz = (entrada) => {

    for (let i = 0; i < entrada.length; i++) {
        console.log("Fila " + i);
        for (let j = 0; j < entrada[i].length; j++) {
            console.log(entrada[i][j]);
        }
    }
}

let matrix = [
    [1, 2, 333],
    [4, 5, 666],
    [7, 8, 999]
]
printMatriz(matrix);

//8) Escribe una función JavaScript para encontrar la suma de cuadrados de un array numérico.

function sumarCuadrados(num) {
    if (!Array.isArray(num)) {
        throw TypeError("Debe ingresar un arreglo");
    }
    if (!num.every(e => typeof e == 'number')) {
        throw TypeError("Debe ingresar números en tu arreglo");
    }
    return num.map(n => Math.pow(n, 2)).reduce((a, c) => (a += c, a), 0);

}
try {
    console.log(sumarCuadrados([1, 2, 3, 4, 5]));
} catch (e) {
    console.log("Error")
}

//9) Escriba un programa JavaScript para calcular la suma y la multiplicacion de una matriz de enteros.

const array = [1, 2, 3, 4];
let suma = 0;
let multiplicar = 1;

for (let i = 0; i < array.length; i++) {
    suma += array[i];
}

for (let i = 0; i < array.length; i++) {
    multiplicar *= array[i];
}
console.log(suma);
console.log(multiplicar);

//10) Escriba una función JavaScript para encontrar la diferencia de dos arrays.
// Example
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

let ArrayOne = ['a', 'b', 'c', 'd', 'e', 'f'];
let ArrayTwo = ['a', 'b', 'c', 'x', 'y', 'z'];
let ArrayThree = ArrayOne.filter(element => !ArrayTwo.includes(element)).
concat(ArrayTwo.filter(element => !ArrayOne.includes(element)))
console.log(ArrayThree)