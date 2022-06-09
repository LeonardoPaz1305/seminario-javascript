//1) Escriba una función javascript para comprobar si una 'entrada' es una matriz o no.

const lista = [1, 2, 3]

function comprobarMatriz(matriz) {
  if (Array.isArray(matriz)) {
    return console.log('Es una Matriz')
  } else {
    console.log('No es una matriz')
  }
}
comprobarMatriz(lista)

//2) Escribir una función JavaScript para clonar un Array.
function clonar(arrayUno, arrayDos) {
  arrayDos = arrayUno.slice();
  console.log(arrayDos)
}

let animalesUno = ['perro', 'gato', 'gallo']
let animalesDos = []

clonar(animalesUno, animalesDos)


//3) Escriba una función JavaScript para obtener el primer elemento de un Array. Pasar un parámetro 'n' devolverá los primeros 'n' elementos del Array.

function primerELemento(n) {
  let elementoUno = n[0]
  console.log(elementoUno)
}

primerELemento(['rojo', 'negro', 'azul'])

//4) Escriba una función JavaScript para obtener el último elemento de un Array. Pasar un parámetro 'n' devolverá los últimos 'n' elementos del Array.
function ultimoELemento(n) {
  let ordenFinal = n.length - 1
  console.log(n[ordenFinal])
}

ultimoELemento(['rojo', 'negro', 'azul', 'celeste', 'amarillo'])

//5) Escriba un programa JavaScript simple para unir todos los elementos de la siguiente matriz en una cadena.
// Matriz de muestra: colores = ["Rojo", "Verde", "Blanco", "Negro"]

function union(n) {
  let concatena = n.join('-')
  console.log(concatena)
}

union(["Rojo", "Verde", "Blanco", "Negro"])

//6) Escriba un programa JavaScript para ordenar los elementos de una matriz.
// Matriz de muestra: numEnteros = [ -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1 ];

function orden(n) {
  let elementoOrdenado = n.sort()
  console.log(elementoOrdenado)
}

let numEnteros = [-3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1];
orden(numEnteros)



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
function filas(n) {
  for (let i = 0; i < n.length; i++) {
    let numero = i
    console.log(`Fila ${numero} -  ${(n[i]).slice()}`);
  }
}

let matrices = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
filas(matrices)

//8) Escribe una función JavaScript para encontrar la suma de cuadrados de un array numérico.

function sumaCuadrados(n) {
  let total = 0
  n.forEach(function (a) {
    total += a ** 2;
  });
  console.log(total);
}

let ejemplo = [2, 4, 3]
sumaCuadrados(ejemplo)


//9) Escriba un programa JavaScript para calcular la suma y la multiplicacion de una matriz de enteros.

function sumaYmulti(n) {
  let total = 0
  n.forEach(function (a) {
    total += a;
  });

  let totalDos = 1
  n.forEach(function (a) {
    totalDos *= a;
  });

  console.log(`La suma de la matriz es: ${total} y la multiplicación es ${totalDos}`);
}

let ejemploDos = [4, 2, 8]
sumaYmulti(ejemploDos)


//10) Escriba una función JavaScript para encontrar la diferencia de dos arrays.
// Example
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]


function differenceOf2Arrays(arr1, arr2) {
  return arr1.concat(arr2).filter(function (val) {
    if (!(arr1.includes(val) && arr2.includes(val)))
      return val;
  });
}
console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));