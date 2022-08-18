//Practica While

//1. Crear una funcion para encontrar el promedio de 5 notas usando el ciclo while

function ArrayAvg(myArray) {
    let i = 0,
        summ = 0,
        ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
}
let myArray = [1, 5, 2, 3, 7];
let a = ArrayAvg(myArray);

console.log(a)


//2. Crear una funcion para encontrar la suma de los dígitos de un número entero usando el ciclo while
//ejemplo resultado Entero: 357, la suma de sus digitos es: 15

function SumaEnteros(num) {
    let suma = 0;
    while (num > 0) {
        suma += num % 10;
        num = parseInt(num / 10);
    }
    return suma;
}
console.log(SumaEnteros(357));

//3.Realizar un programa que realice lo siguiente utilizando while
// En una empresa trabajan n empleados cuyos sueldos oscilan entre 100$ y 500$
// realizar un programa que informe cuantos empleados cobran entre 100$ y 500$,
// cuantos cobran mas de 500$. Ademas el programa debera informar sobre el importe
// que gasta la empresa en sueldos al personal
// const sueldos = [350,150,200,320,310,260,420]

//4. Escriba una funcion JavaScript para calcular el máximo común divisor (MCD) de dos enteros positivos usando el ciclo while.

const calMcd = (a, b) => {
    let temporal;
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
};
console.log(calMcd(32, 40))

//5. Escriba una funcion para encontrar todos los números pares 
// que se encuentran entre dos números ingresados usando el ciclo while.

function numpares(num1, num2) {

    if (num1 > num2) {
        while (num1 > num2) {

            if (num2 % 2 == 0) {
                console.log("El " + num2 + " es par")
            }
            num2++;
        }
    } else {
        while (num1 > num2) {

            if (num1 % 2 == 0) {
                console.log("El " + num1 + " es par")
            }
            num1++;
        }
    }
}
numpares(21, 12)

//6. Escriba una funcion para invertir un numero por ejemplo 67023 usando el ciclo while.

function invertirNumero(num) {
    let numInvertido;

    while (Number.isInteger(num)) {
        numInvertido = String(num).split('').map(el => Number(el)).reverse().join('')
        console.log(`Número Invertido de '${num}' es: ${Number(numInvertido)}`)
        break
    }
}
invertirNumero(67023)

//7. Escriba una funcion para mostrar los nombres de los dígitos de un número 
// por ejemplo, si el número es 231, la salida debe ser Dos Tres Uno usando el ciclo while.
// puedes apoyarte de estos objetos para convertir el entero en array 
// Array.from(String(231), Number); salida : [ 2, 3, 1 ];

const nameDigitos = (a) => {
    let num = Array.from(String(a), Number);
    let i = 0;
    let n = { 0: "Cero", 1: "Uno", 2: "Dos", 3: "Tres", 4: "Cuatro", 5: "Cinco", 6: "Seis", 7: "Siete", 8: "Ocho", 9: "Nueve" }
    let numText = '';
    while (i < num.length) {
        numText += n[num[i]] + " ";
        i++;
    }
    console.log(numText);
}
nameDigitos(231);

//8. Escriba una funcion para mostrar la suma de números impares y números pares 
// por separado que se encuentran entre dos números ingresados por el usuario 
// (incluidos ambos números) usando el ciclo while.

function sumaEvenOdd(n1, n2) {
    let evenSum = oddSum = 0
    while (n1 <= n2) { // condition
        if (n1 % 2 == 0) {
            evenSum += n1;
        } else {
            oddSum += n1;
        }
        n1++; // incrementation
    }
    console.log(evenSum, oddSum)
}
sumaEvenOdd(6, 10);