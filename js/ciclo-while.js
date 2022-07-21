//Bucle While

//break
for (let i = 0; i <= 5; i++) {
    console.log(i);
    if (i === 3) break;
}

//continue
for (let i = 0; i <= 11; i++) {
    if (i % 2 === 1) continue;
    console.log(i);
}


let j = 0;
while (j <= 5) {
    console.log(j);
    j++;
}

const numeroSecreto = Math.floor(Math.random() * 10);
// console.log(numeroSecreto);
let numeroMaquina = Math.floor(Math.random() * 10);
let intentos = 1;
while (true) {
    if (numeroSecreto === numeroMaquina) break;
    console.log(`${numeroSecreto} vs ${numeroMaquina}`);
    numeroMaquina = Math.floor(Math.random() * 10);
    intentos++;
}
console.log('Lo encontramos');
console.log(`ganamos en el intento ${intentos}`);

////////////////////////////////////////////////

/// For of //

let cadena = 'Hola Mundo';
const miArray = ['gato', 'perro', 'canario', 'loro', 'tarantula'];

for (let elemento of cadena) {
    console.log(elemento);
}

const miArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
    [5, 5, 5, 5]
]

for (let fila of miArray2) {
    let suma = 0;
    for (let numero of fila) {
        suma += numero;
    }
    console.log(suma);
}

const cliente01 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 45,
    domicilio: 'Paseo del rey 1400',
    localidad: 'Capital Federal'
}

const llaves = Object.keys(cliente01);
const valores = Object.values(cliente01);

console.log(llaves);
console.log(valores);

for (let elemento of llaves) {
    console.log(`${elemento} : ${cliente01[elemento]}`);
}

// For In//
const ticket01 = {
    sal: 33,
    fosforos: 12,
    yerba: 45,
    azucar: 55,
    pan: 15
}

for (let llave in ticket01) {
    console.log(ticket01[llave]);
}

const miArray3 = ['yerba', 'azucar', 'sal'];
for (let indice in miArray3) {
    console.log(miArray3[indice]);
}