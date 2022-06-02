// --- Metodos Arrays segunda parte --- //

// --- Metodo Slice --- //
//                   0       1         2        3         4          5       6       7
const animales = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'Cobra', 'Boa', 'Mamba'];
const felinos = animales.slice(0, 5);
console.log(felinos);

const serpientes = animales.slice(-3);
console.log(serpientes);

// --- Metodo Sort --- //
animales.sort();
console.log(animales);

const numeros = [100, 2, 8, 10, 11, 1200, 200];
numeros.sort((a, b) => a - b);
console.log(numeros);

// --- Metodo Splice --- //
const animales2 = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'Cobra', 'Boa', 'Mamba'];
// animales2.splice(5, 2, 'Piton', 'Vibora');
const serpientes2 = animales2.splice(5, 3);
animales2.splice(5, 0, serpientes2);
console.log(animales2);

// --- Metodo Every --- //
const edades = [1, 15, 17, 13, 8]
const sonMenoresEdad = (edad) => edad <= 18;
let resultado = (edades.every(sonMenoresEdad));

console.log(resultado);

//Son mayores a 18?
[20, 33, 21, 31].every(valor => valor >= 18); // true
[20, 15, 21, 31].every(valor => valor >= 18); // false 15 no es mayor

// --- Metodo forEach --- //
const animales3 = ['Puma', 'Tigre', 'Pantera', 'Leon', 'Leopardo', 'Cobra', 'Boa', 'Mamba'];
// animales3.forEach(valor => console.log(valor));

function retornaValores(valor, indice) {
    console.log(`${indice} = ${valor}`);
}

animales.forEach(retornaValores);

// --- Metodo Map --- //

const numeros2 = [1, 2, 3, 4, 5];

const doble = numeros2.map(function(valor) {
    return valor * 2
})

console.log(doble);

const raiz = doble.map(Math.sqrt);

console.log(raiz);

const nuevo = numeros2.map(function(elementos, indices) {
    return `${indices} : su valor es ${elementos}`;
});

console.log(nuevo);