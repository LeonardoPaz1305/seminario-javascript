/*
condicion ? siEsVerdadero : siEsFalso;
*/

let edad = 18;

if (edad >= 18) {
    console.log('es mayor de edad');
} else {
    console.log('es menor de edad');
}

edad >= 18 ? console.log('es mayor de edad') : console.log('es menor de edad');

let resultado = edad >= 18 ? 'es mayor de edad' : 'es menor de edad';
console.log(resultado);