// 1
// let entrada = [];
// let validar = (entrada) => {
//   if (typeof entrada == typeof []) {
//     console.log("es matriz");
//   } else {
//     console.log("no es matriz");
//   }
// };
// validar(entrada);

// 2
// let numeros = [1, 2, 3, 53, "adsf"];
// let clonar = (parametro) => {
//   return parametro.slice();
// };
// let copia = clonar(numeros);
// console.log(copia);

// 3
// let array = [1, 2, 3, 4, 5, "aaa", "bbb"];
// let cortarNumeros = (array, n) => {
//   return array.slice(0, n);
// };
// let primerosNumeros = cortarNumeros(array, 6);
// console.log(primerosNumeros);

// 4
// let array = [1, 2, 3, 4, 5, "aaa", "bbb"];
// let cortarNumeros = (array, n) => {
//   return array.slice(-n);
// };
// let ultimosNumeros = cortarNumeros(array, 3);
// console.log(ultimosNumeros);

// 5
// let colores = ["Rojo", "Verde", "Blanco", "Negro"];
// console.log(colores.join());

// 6
// let numEnteros = [-3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1];
// let numOrdenados = numEnteros.sort((a, b) => a - b);
// console.log(numOrdenados);

// 7
// let matrices = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];
// matrices.forEach(function (a, index) {
//   console.log("Fila : " + index);
//   a.forEach(function (b) {
//     console.log(b);
//   });
// });

// 8
// let array = [1, 2, 3, 5];
// let cuadrados = array.map((a) => a * a);
// let sumaCuadrados = cuadrados.reduce((a, b) => a + b);
// console.log(sumaCuadrados);

// 9
// let array = [1, 2, 3, 5, 8];
// let suma = array.reduce((a, b) => a + b);
// let multiplicacion = array.reduce((a, b) => a * b);
// console.log(suma);
// console.log(multiplicacion);

// 10
// Example
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
let differenceOf2Arrays = (a, b) => {
  for (let k = 0; k < b.length; k++) {
    if (a.indexOf(b[k]) >= 0) {
      a.splice(a.indexOf(b[k]), 1);
    } else {
      a.push(b[k]);
    }
    console.log(a);
  }
  return a;
};
console.log(
  "diferencia : ",
  differenceOf2Arrays([1, 2, 3, 20], [100, 2, 1, 10, 20])
);
