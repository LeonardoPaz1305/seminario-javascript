/*
Ejercicio numero 2

- 0 a 3 // Aplazado
- 4 a 6 // Estudia para la proxima
- 7 a 9 // Muy bien, continua asi.
- 10 // Excelente

//Mas de 10 o numero negativo // Nota mal ingresada

*/

let nota = 0;

if (nota >= 0 && nota <= 3) {
    console.log("Nota aplazado");
} else
if (nota >= 4 && nota <= 6) {
    console.log("Estudia para la proxima");
} else
if (nota >= 7 && nota <= 9) {
    console.log("Muy bien continua asi");
} else
if (nota == 10) {
    console.log("Excelente");
} else {
    console.log("Nota mal ingresada");
}