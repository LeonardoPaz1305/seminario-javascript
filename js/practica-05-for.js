//1.Realice un programa que enumere los paises de la siguiente lista
// const paises = ['Canada', 'USA', 'Mexico', 'Australia'];
// const paises = ['Canada', 'USA', 'Mexico', 'Australia'];
// for (let i = 0; i < paises.length; i++) {
//     console.log(`${i} - ${paises[i]}`);
// }

//2.Crear un ciclo for que cuente de 0 a 100
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

//3.Haz una tabla de multiplicar utilizando el ciclo for
// for (let i = 1; i <= 12; i++) {
//     console.log(`--------Inicia la tabla del ${i}-------`);
//     for (let j = 0; j <= 12; j++) {
//         let multiplicando = i;
//         console.log(`${multiplicando} x ${j} = ${multiplicando * j}`);
//     }
//     console.log(`--------Finaliza la tabla del ${i}-------`);
// }

//4.Imprima los números del 1 a 10 al revés utilizando el ciclo for
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

//5.Crear un bucle que cuente todos los números pares hasta el 100
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//6.Cree un bucle que sume los números del 100 al 200
// let suma = 0;
// for (let i = 100; i <= 200; i++) {
//     suma = suma + i;
// }
// console.log(suma);

//7.Imprima el siguiente patrón con el ciclo for por consola:

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

//solucion 1
// let x, z;
// for (x = 1; x < 6; x++) {
//     let element = '';
//     for (let i = 0; i < x; i++) {
//         element = element + '*';
//     }
//     console.log(element);
// }
// for (let z = 4; z > 0; z--) {
//     let element = '';
//     for (let j = 0; j < z; j++) {
//         element = element + '*';
//     }
//     console.log(element);
// }

//solucion 2
// let ent, cad;
// ent = 4;
// cad = ('*').repeat(ent * 1 + 1) + '\n';
// // console.log(typeof(cad));
// for (let i = ent - 1; i >= 0; i--) {
//     // console.log(i); 3 2 1 0

//     // bloque descendente de astericos
//     cad = cad + ('*').repeat(i + 1) + '\n';
//     // console.log(('*').repeat(i + 1) + '\n');

//     //bloque ascendente de asteriscos mas el bloque medio
//     cad = ('*').repeat(i + 1) + '\n' + cad;

// }
// console.log(cad);

//8.Imprima el siguiente patrón con el ciclo for por consola:

//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1

// for (let i = 5; i > 0; i--) {
//     let element = '';
//     for (let j = 1; j <= i; j++) {
//         console.log(j);
//         element = `${j} ${element}`;
//     }
//     console.log(element);
// }

//9.Escriba un código JS para encontrar el número más grande en una matriz 
// let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

// let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
// let largest = arr[0];
// let newArr = [0];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     largest = arr[i] > largest ? arr[i] : largest; //Check largest number   
//     console.log(largest);
//     newArr.push(largest);
// }
// console.log(`ha recorrido ${newArr.length} veces para encontrar el numero mayor ${largest} en el array`);

//10. Programa para encontrar el número de conteo de ceros en la matriz
// let arr2 = [[0,1,1],[0,1,0],[1,0,0]];
// usando bucles for anidados y operaciones de incremento.

// let arr2 = [
//     [0, 1, 1],
//     [0, 1, 0],
//     [1, 0, 0]
// ];

// let zeroCount = 0; //0
// for (let i = 0; i < arr2.length; i++) {
//     // console.log(i);
//     for (let j = 0; j < arr2[i].length; j++) {
//         // console.log(j);
//         zeroCount = arr2[i][j] == 0 ? zeroCount + 1 : zeroCount;
//         //zeroCount = [0][0] == 0 ? 0 + 1 : 0
//     }

// }

// console.log(zeroCount);