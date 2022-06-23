//1) Escriba una función javascript para comprobar si una 'entrada' es una matriz o no.

function isArray(value) {

    if (typeof(value) === "object") {
        return true
    }

    if (toString.call(value) === "[object Array]") {
        return true
    }

    if (Array.isArray(value)) {
        return true
    }

    return false
}

// console.log([5, 10, 80, true, false, 'kevin','dinamico']);
console.log(isArray([1, 2, 3, 4]));

//2) Escribir una función JavaScript para clonar un Array.

function cloneArray(value) {
    return value.slice(0);
}

console.log(cloneArray([1, 2, 5, true, false]));

//3) Escriba una función JavaScript para obtener el primer elemento de un Array. Pasar un parámetro 'n' devolverá los primeros 'n' elementos del Array.

function firstElement(value, n) {
    if (value == null) {
        return 'ingresar un array';
    }
    if (n == null) {
        return value[0];
    }
    if (n < 0) {
        return [];
    }
    return value.slice(value, n);
}

console.log(firstElement([7, 9, 0, -2], 3));

//4) Escriba una función JavaScript para obtener el último elemento de un Array. Pasar un parámetro 'n' devolverá los últimos 'n' elementos del Array.

function lastElement(value, n) {
    if (value == null) {
        return 'ingresar un array';
    }
    if (n == null) {
        return value[value.length - 1];
    }
    return value.slice(value.length - n);
};

console.log(lastElement([7, 9, 0, -2]));

//5) Escriba un programa JavaScript simple para unir todos los elementos de la siguiente matriz en una cadena.
// Matriz de muestra: colores = ["Rojo", "Verde", "Blanco", "Negro"];

let colores = ["Rojo", "Verde", "Blanco", "Negro"];
console.log(colores.join());

//6) Escriba un programa JavaScript para ordenar los elementos de una matriz.
// Matriz de muestra: numEnteros = [ -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1 ];

let numEnteros = [-3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1];
let ordenNum = numEnteros.sort((a, b) => a - b); //
console.log(ordenNum);

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

let matrices = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

matrices.forEach((element, index) => {
    console.log(`Row ${index}`);
    element.forEach((child) => {
        console.log(child);
    });
});

//8) Escribe una función JavaScript para encontrar la suma de cuadrados de un array numérico.

function sum_sq(array) {
    var sum = 0;
    array.forEach((element, index) => {
        sum += Math.pow(array[index], 2); // sum = sum + (array[index] ** 2)
        // sum = sum + (array[index] ** 2);
        // console.log(sum);
    });
    return sum;
}

console.log(sum_sq([0, 1, 2, 3, 4, 5]));

//9) Escriba un programa JavaScript para calcular la suma y la multiplicacion de una matriz de enteros.

const array = [1, 2, 3, 4, 5, 6];
let suma = 0;
let producto = 1;

array.forEach(function(value, index) {
    suma += array[index];
    //suma = suma + array[index];
    producto *= array[index];
    //producto = producto * array[index];
});

console.log(`Suma : ${suma} Producto :  ${producto}`);

//10) Escriba una función JavaScript para encontrar la diferencia de dos arrays.
// Example
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// salida : ["3", "10", "100"]

function differenceOf2Arrays(array1, array2) {
    let difference = [];
    array1.forEach((element, index) => {
        // console.log(array2.indexOf(array1[index]));
        if (array2.indexOf(array1[index]) === -1) {
            difference.push(array1[index]);
        }
    });

    array2.forEach((element, index) => {
        // console.log(array1.indexOf(array2[index]));
        if (array1.indexOf(array2[index]) === -1) {
            difference.push(array2[index]);
        }
    })

    return difference.sort((a, b) => a - b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));