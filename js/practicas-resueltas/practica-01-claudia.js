//Ejercicios 
//Cada punto correcto suma un punto.

//Aritmetica

/*1)*/
console.log(1.5 + 1.5 * 2)

// rpta. 4.5

/*2)*/
console.log((10 % 6) ** 2)

// rpta. 16

/*3)*/
console.log(200 + 10 / 100)

// rpta. 200.1

//4) definir las variables con datos numericos e imprimir un console descriptivo de cada operacion

let a, b, c, resultado;

a = 2;
b = 4;
c = 6;

resultado = a + b;
console.log(resultado); // rpta. 6
resultado = a - b;
console.log(resultado); // rpta. -2
resultado = a * b;
console.log(resultado); // rpta. 8
resultado = a / b;
console.log(resultado); //rpta. 0.5
resultado = a % b;
console.log(resultado); // rpta. 2 
resultado = a ** b;
console.log(resultado); // rpta. 16 

//OPERACIONES COMBINADAS
resultado = (a + b) * c / (a + b);
console.log(resultado); // rpta. 6

resultado = (a - c) * b / (a - c);
console.log(resultado); // rpta. 4

resultado = (b - c) * a / (b - c);
console.log(resultado); // rpta. 2

//CONSOLA
let d = 2;
let e = 5;
let f = 'resultado';
const YEAR = '2022';

// 5) ¿Que muestra esta linea en consola?
console.log('resultado'); // rpta. resultado

// 6) ¿Que valor guarda f, lo puedes ver, como?
f = d + e;
// rpta. 7 
// 7) ¿Que valor se imprime en consola?
console.log(++f);
// rpta. 8 
// 8) ¿Que valor guarda f ahora?
f += d;
// rpta. 10
// 9) ¿Que problema tiene esta linea de codigo ?
let resultadoDos = e + '10';
//rpta. Que concatena sale 510 y es un string 
// 10) ¿Que valor se imprime en consola ?
console.log(d + 'JS');
// rpta. 2JS - se convierte en string 
// 11) ¿Cuantas variables usamos hasta ahora, dime sus nombre?
// let d, e, f, resultado y const YEAR
// 12) ¿Que valor de imprime en consola?
let covid19 = 'El año de la pandemia'
resultado = `${covid19} ${YEAR}`;
console.log(resultado); // rpta. El año de la pandemia 2022

// 13) ¿Que valor se imprime en consola?
//console.log('El año ' + (++YEAR) + ' seguro estaremos mejor');
// rpta. Sale error porque las constante no se pueden modificar y aparte que es un string que no acepta operaciones matematicas

// 14) ¿Que tipo de dato primito imprime en consola?
console.log(typeof e); // rpta. number 

// 15) ¿Cuantas formas de concatenación hemos visto? explique con ejemplos

let espacio = ' ';
console.log('hola soy un espacio'+espacio+'en una variable') 

let nombre = "Leo";
console.log(`¡Hola ${nombre}!`);


//BUENAS PRACTICAS

// 16) Que se recomienda usar ¿var o let? ¿por que?
// rpta. Se recomienda let, porque solo se puede nombrar una vez esa variable 
// 17) ¿Que forma es mas legible para una variable "totalAcumulado" ó "TotalAcumulado"?
//rpta. totalAcumulado - camelCase
// 18) const meses = 12; ó const MESES = 12;
// rpta.  const MESES = 12; por ser const
// 19) const NUMERO_PI Ó NUMEROPI
// rpta. const NUMERO_PI, para que sea legible
// 20) let numero = 5 ó let numero = 5;
// rpta. let numero = 5; - siempre usar el ;