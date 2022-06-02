//Ejercicios 
//Cada punto correcto suma un punto.

//Aritmetica

/*1)*/
console.log(1.5 + 1.5 * 2); //4.5

/*2)*/
console.log((10 % 6) ** 2); //16

/*3)*/
console.log(200 + 10 / 100); //200.1

//4) definir las variables con datos numericos e imprimir un console descriptivo de cada operacion

// let a, b, c, resultado;

// resultado = a + b;
// console.log();
// resultado = a - b;
// console.log();
// resultado = a * b;
// console.log();
// resultado = a / b;
// console.log();
// resultado = a % b;
// console.log();
// resultado = a ** b;
// console.log();

//OPERACIONES COMBINADAS
//resultado = (a + b) * c / (a + b);
//console.log();

//resultado = (a - c) * b / (a - c);
//console.log();

//resultado = (b - c) * a / (b - c);
//console.log();

//CONSOLA
let d = 2;
let e = 5;
let f = 'resultado';
const YEAR = '2022';

// 5) ¿Que muestra esta linea en consola?
console.log('resultado');

// 6) ¿Que valor guarda f, lo puedes ver, como?
f = d + e; //7
console.log(f);

// 7) ¿Que valor se imprime en consola?
console.log(++f);

// 8) ¿Que valor guarda f ahora?
f += d; //10
console.log(f);

// 9) ¿Que problema tiene esta linea de codigo ?
let resultado = e + '10';
console.log(typeof resultado);

// 10) ¿Que valor se imprime en consola ?
console.log(d + 'JS');

// 11) ¿Cuantas variables usamos hasta ahora, dime sus nombre?
//let, const y pues d, e, f y YEAR

// 12) ¿Que valor de imprime en consola?
let covid19 = 'El año de la pandemia'
resultado = `${covid19} ${YEAR}`;
console.log(resultado); //El año de la pandemia 2022

// 13) ¿Que valor se imprime en consola?
//console.log('El año ' + (++YEAR) + ' seguro estaremos mejor');

// 14) ¿Que tipo de dato primito imprime en consola?
console.log(typeof e); // number

// 15) ¿Cuantas formas de concatenación hemos visto? explique con ejemplos

//BUENAS PRACTICAS

// 16) Que se recomienda usar ¿var o let? ¿por que?
// 17) ¿Que forma es mas legible para una variable "totalAcumulado" ó "TotalAcumulado"?
// 18) const meses = 12; ó const MESES = 12;
// 19) const NUMERO_PI Ó NUMEROPI
// 20) let numero = 5 ó let numero = 5;