//String Metodos

let cadena = 'texto';

let cadena2 = new String('TEXTO 2');

console.log(typeof cadena2);

console.log(cadena2);

//Metodo charAt
console.log(cadena.charAt(2));

//Metodo toLowerCase
console.log(cadena2.toLowerCase());

//Metodo toUpperCase
console.log(cadena.toUpperCase());

//Metodo Trim
let cadena3 = '    Esto es      una cadena con         problemas de espacios.          ';
console.log(cadena3.trim());

//Cadena H o l a - M u n d o
//Indice 0 1 2 3 4 5 6 7 8 9
//Largo  1 2 3 4 5 6 7 8 9 10

//Metodo indexOf
let saludo = "Hola-Mundo";
// saludo += " compliquemos el asunto";
console.log(saludo.indexOf('o', 2));
// console.log(saludo.indexOf('o', 2));

//Metodo Slice
let texto = "Hola-Mundo";
console.log(texto.slice(5, -3));
// console.log(texto.slice(5, 8));

let ingresadoProUsuario = "S/ 550.25";
//let soles = Number(ingresadoProUsuario.slice(3));
let soles = +(ingresadoProUsuario.slice(3));
console.log(typeof soles);
console.log(soles);

//Metodo Replace
let hola = "Hola Mundo";
console.log(hola.replace("Mundo", "Amigos esto es una prueba desde JavaScript"));

let frase = "el perro fue a morder a otro perro";
console.log(frase.replace("perro", "leon"));