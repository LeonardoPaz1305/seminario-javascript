//Practica While

//1. Crear una funcion para encontrar el promedio de 5 notas usando el ciclo while

// let promedio = (nota1, nota2, nota3, nota4, nota5) => {
//     let notas = [nota1, nota2, nota3, nota4, nota5];
//     let suma = 0;
//     let i = 0;
//     while (i < notas.length) {
//         suma += notas[i];
//         i++;
//     }
//     let promedio = suma / 5;
//     console.log(`El promedio es ${promedio}`);
// }

// promedio(15, 18, 20, 10, 13);

//2. Crear una funcion para encontrar la suma de los dígitos de un número entero usando el ciclo while
//ejemplo resultado Entero: 357, la suma de sus digitos es: 15

// let sumDigitos = (number) => {
//     let sum = 0;
//     while (true) {
//         if (number === 0) break;
//         let digit = number % 10;
//         sum = sum + Math.floor(digit);
//         number = number / 10;
//     }
//     console.log(`La suma de dígitos es: ${sum}`);
// }
// sumDigitos(357);

//3.Realizar un programa que realice lo siguiente utilizando while
// En una empresa trabajan n empleados cuyos sueldos oscilan entre 100$ y 500$
// realizar un programa que informe cuantos empleados cobran entre 100$ y 500$,
// cuantos cobran mas de 500$. Ademas el programa debera informar sobre el importe
// que gasta la empresa en sueldos al personal
// const sueldos = [350,150,200,320,310,260,420]

// const sueldos = [350, 150, 200, 320, 310, 260, 420];
// console.log(`¿Cuantos empleados hay en la empresa? \nLa empresa tiene ${sueldos.length} empleados`);

// let i = 0;
// let sueldo = 0;
// let emp100500 = 0;
// let emp500 = 0;
// let importe = 0;

// while (i < sueldos.length) {
//     sueldo = sueldos[i];
//     console.log(`¿Cual es el sueldo del empleado ${i + 1}? \nEl sueldo del empleado ${i + 1} es: ${sueldo}$`);
//     if (sueldo >= 100 && sueldo <= 500) {
//         emp100500 += 1
//     }
//     if (sueldo > 500) {
//         emp500 += 1
//     }
//     importe += sueldo;
//     i++;
// }

// console.log(`Los empleados que cobran entre 100$ y 500$ son: ${emp100500}`);
// console.log(`Los empleados que cobran mas de 500$ son: ${emp500}`);
// console.log(`Los gastos de la empresa son: ${importe}$`);

//4. Escriba una funcion JavaScript para calcular el máximo común divisor (MCD) de dos enteros positivos usando el ciclo while.

// const maximoComunDivisor = (a, b) => {
//     let calcular;
//     while (b !== 0) {
//         calcular = b;
//         b = a % b;
//         console.log(b);
//         a = calcular;
//     }
//     return a;
// };

// console.log(maximoComunDivisor(225, 300));

//5. Escriba una funcion para encontrar todos los números pares 
// que se encuentran entre dos números ingresados usando el ciclo while.

// const pares = (a, b) => {
//     console.log(`Primer número ${a}`);
//     console.log(`Segundo número ${b}`);
//     if (a > b) {
//         while (a > b) {
//             if (b % 2 == 0) {
//                 console.log(b);
//             }
//             b += 1;
//         }
//     } else {
//         while (a < b) {
//             if (a % 2 == 0) {
//                 console.log(a);
//             }
//             a += 1;
//         }
//     }
// };
// pares(21, 12);

//6. Escriba una funcion para invertir un numero por ejemplo 67023 usando el bucle while.

// const numeroInvertido = (a) => {
//     console.log(`El número ingresado es: ${a}`);
//     num = a;
//     let r = 0;
//     let rnum = 0;
//     while (num != 0) {
//         r = num % 10;
//         rnum = rnum * 10 + r;
//         num = Math.floor(num / 10);
//     }
//     console.log(`El número inverso es: ${rnum}`);

// }
// numeroInvertido(67023);

//7. Escriba una funcion para mostrar los nombres de los dígitos de un número 
// por ejemplo, si el número es 231, la salida debe ser Dos Tres Uno usando el bucle while.
// puedes apoyarte de estos objetos para convertir el entero en array 
// Array.from(String(231), Number); salida : [ 2, 3, 1 ];

// const nameDigitos = (a) => {
//     let num = Array.from(String(a), Number);
//     let i = 0;
//     let n = { 0: "Cero", 1: "Uno", 2: "Dos", 3: "Tres", 4: "Cuatro", 5: "Cinco", 6: "Seis", 7: "Siete", 8: "Ocho", 9: "Nueve" }
//     let numText = '';
//     while (i < num.length) {
//         numText += n[num[i]] + " ";
//         i++;
//     }
//     console.log(numText);
// }
// nameDigitos(321);

//8. Escriba una funcion para mostrar la suma de números impares y números pares 
// por separado que se encuentran entre dos números ingresados por el usuario 
// (incluidos ambos números) usando el ciclo while.

// const sumImpPar = (a, b) => {
//     let num1 = a;
//     let num2 = b;
//     let sumPar = 0;
//     let sumImp = 0;

//     if (num1 > num2) {
//         while (num2 <= num1) {
//             if (num2 % 2 == 0) {
//                 sumPar += num2;
//                 num2++;
//             } else {
//                 sumImp += num2;
//                 num2++;
//             }
//         }
//     } else {
//         while (num1 <= num2) {
//             if (num1 % 2 == 0) {
//                 sumPar += num1;
//                 num1++;
//             } else {
//                 sumImp += num1;
//                 num1++;
//             }
//         }
//     }
//     console.log(`Primer numero ingresado es: ${a}`);
//     console.log(`Segundo numero ingresado es: ${b}`);
//     console.log(`La suma de los números pares es: ${sumPar}`);
//     console.log(`La suma de los números impares es: ${sumImp}`);
// };

// sumImpPar(16, 12);