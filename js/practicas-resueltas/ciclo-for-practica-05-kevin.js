// 1
// const paises = ["Canada", "USA", "Mexico", "Australia"];
// for (let i = 0; i < paises.length; i++) {
//   console.log(i + 1, paises[i]);
// }

// 2
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// 3
// for (let i = 1; i <= 12; i++) {
//   console.log(i + "*" + "5" + "=" + i * 5);
// }

// 4
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 5
// let cantidad = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     cantidad++;
//   }
// }
// console.log("cantidad de pares : " + cantidad);

// 6
// let suma = 0;
// for (let i = 100; i <= 200; i++) {
//   suma = suma + i;
// }
// console.log(suma);

// 7
// let cadena = "";
// for (let i = 1; i <= 5; i++) {
//   cadena = cadena + "*";
//   console.log(cadena);
// }
// for (let i = 5; i >= 1; i--) {
//   cadena = cadena.slice(0, -1);
//   console.log(cadena);
// }

// 8
let cadena = "";
for (let i = 5; i >= 1; i--) {
  cadena = cadena + i + " ";
  //   console.log(cadena);
}
for (let i = 5; i >= 1; i--) {
  console.log(cadena);
  cadena = cadena.slice(2);
}

// 9
// let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
// let mayor = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (mayor < arr[i]) {
//     mayor = arr[i];
//   }
// }
// console.log(mayor);

// 10
// let arr2 = [
//   [0, 1, 1],
//   [0, 1, 0],
//   [1, 0, 0],
// ];
// let ceros = 0;
// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2[i].length; j++) {
//     if (arr2[i][j] == 0) {
//       ceros++;
//     }
//   }
// }
// console.log("numero de ceros : " + ceros);
