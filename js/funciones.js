/* Syntaxis */

// function myFunction(parameter) {
//     return console.log(parameter);
// }

// myFunction('hola mundo');

//Ejercicios

//Escriba una funcion de JavaScript que retorne tu nombre y apellidos
function nombreApellido(nombre, apellidos) {
    return console.log(nombre + ' ' + apellidos);
}

nombreApellido('Kevin', 'Zambrano');

//Escriba una función de JavaScript que invierta un número

let resultado = reverseNumber(123);

console.log(resultado);

function reverseNumber(number) {
    number += "";
    return number.split("").reverse().join("");
}

//////////variable en una funcion////////////////

let myFunction = function(parameter) {
    return console.log(parameter);
}

myFunction('hola mundo');

//Escriba una funcion de JavaScript que realice una operacion aritmetica donde incluya (+, -, *, /, ** y %).

function classRoom(number1, number2) {
    let operacionSuma = number1 + number2;
    let operacionResta = number1 - number2;
    let operacionMultiplicar = number1 * number2;
    let operacionDividir = number1 / number2;
    let operacionPotencia = number1 ** number2;
    let operacionModulo = number1 % number2;

    let resultadoOperaciones = `
        - La suma de ${number1} + ${number2} = ${operacionSuma}
        - La resta de ${number1} - ${number2} = ${operacionResta}
        - La multiplicacion de ${number1} * ${number2} = ${operacionMultiplicar}
        - La division de ${number1} / ${number2} = ${operacionDividir}
        - ${number1} elevado a ${number2} = ${operacionPotencia}
        - El resto entre ${number1} y ${number2} = ${operacionModulo}
    `;

    return resultadoOperaciones;
}

console.log(classRoom(5, 10));