//1) Escriba una función javascript para comprobar si una 'entrada' es una matriz o no.

var lista1 = [1, 2, 3]
console.log(Array.isArray(lista1))

//2) Escribir una función JavaScript para clonar un Array.

var array1 = [1,2,3,4,5];
var array2=[];

for(var i=0; i < array1.length; i++){
  array2.push(array1[i]);
}
console.log(array2)


//3) Escriba una función JavaScript para obtener el primer elemento de un Array. Pasar un parámetro 'n' devolverá los primeros 'n' elementos del Array.

var array3 = ["a", "b", "c", "d"];
console.log(array3[0])
var NuevoParametro = array3.unshift('e');
console.log(array3)


//4) Escriba una función JavaScript para obtener el último elemento de un Array. Pasar un parámetro 'n' devolverá los últimos 'n' elementos del Array.

let arr10=[0, 2, 4, 6, 8];  
const getLastArrItem = (arr) => { 
  let lastItem=arr[arr.length-1];  
  console.log(`Último elemento es: ${lastItem}`); 
}  
getLastArrItem(arr10); 

let NuevoParametro2 = arr10.push(10);
console.log(arr10)

//5) Escriba un programa JavaScript simple para unir todos los elementos de la siguiente matriz en una cadena.
// Matriz de muestra: 

colores = ["Rojo", "Verde", "Blanco", "Negro"]
console.log(colores.join());


//6) Escriba un programa JavaScript para ordenar los elementos de una matriz.
// Matriz de muestra: 

numEnteros = [ -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1 ];
console.log(numEnteros.sort())
console.log(numEnteros.sort(function(a, b){return a - b}))

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

//8) Escribe una función JavaScript para encontrar la suma de cuadrados de un array numérico.
function sumarCuadrados(numero){
  if (!Array.isArray(numero)){
    throw TypeError("Debe ingresar un arreglo");
  }
  if(!numero.every(e => typeof e == 'number')){
    throw TypeError("Debe ingresar números en tu arreglo");
  }
  return numero.map(n => Math.pow(n, 2)).reduce((a, c) => (a += c, a), 0);
  
}
try{
  console.log(sumarCuadrados([1,2,3,4,5]));
}catch (e){
  console.log("Error")
}

//9) Escriba un programa JavaScript para calcular la suma y la multiplicacion de una matriz de enteros.

const array = [1, 2, 3, 4];
let sum = 0;
let multi = 1;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

for (let i = 0; i < array.length; i++) {
  multi *= array[i];
}
console.log(sum);
console.log(multi);

//10) Escriba una función JavaScript para encontrar la diferencia de dos arrays.
// Example
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

let primerArray = ['a', 'b', 'c', 'd', 'e', 'f'];
let segundoArray = ['a', 'b', 'c', 'x', 'y', 'z'];
let tercerArray = primerArray.filter(element => !segundoArray.includes(element)).
    concat(segundoArray.filter(element => !primerArray.includes(element)))
console.log(tercerArray)