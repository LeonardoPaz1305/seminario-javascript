//Arrays Metodos

let frutas = ['Pera', 'Platano'];
let largo = frutas.push('manzana', 'melon', 'fresa', 'mango');
console.log(frutas);
console.log(largo);

let resPop = frutas.pop();
console.log(frutas);
console.log(resPop);
console.log(largo);
frutas.pop();
frutas.pop();
frutas.pop();
console.log(frutas.length);
console.log(frutas);

////////////////////////////////////////////

let dato = frutas.unshift('manzana', 'fresa');
console.log(frutas);
console.log(dato);

let dato1 = frutas.shift();
console.log(dato1);
console.log(frutas);

////////////////////////////////////////////

let numeros = [1, 2, 3, 4];
let verduras = ['Lechuga', 'Cebolla', 'Zapallo'];
let frutas1 = ['platano', 'pera', 'mango'];

let unionArrays = (numeros + " " + frutas1);

console.log(unionArrays);
console.log(typeof unionArrays);

console.log(numeros.concat(frutas));

const misArrays = frutas.concat(numeros, verduras);
console.log(misArrays);

////////////////////////////////////////////////////

const nombres = [
    'jimy',
    'kevin',
    'richard',
    'claudia',
    'liz',
    'ana',
    'jimy',
    'jorge',
    'jimy',
]

console.log(nombres.includes('Jimy'.toLocaleLowerCase()));

if (nombres.includes('liz')) {
    console.log('Si existe');
} else {
    console.log('No existe');
}

if (nombres.indexOf('jimy', 7) !== -1) {
    console.log('Si existe');
    console.log(nombres.indexOf('jimy', 7));
} else {
    console.log('No existe');
}

/////////////////////////////////////////////////////////////

const numerosOrdenados = [1, 2, 3, 4, 5];

console.log(numerosOrdenados.reverse());
console.log(numerosOrdenados);

// console.log(numerosOrdenados.reverse());
// console.log(numerosOrdenados);

console.log(numerosOrdenados.join(' '));
console.log(numerosOrdenados.join('/'));
console.log(numerosOrdenados.join(' xxx'));
console.log(numerosOrdenados.join());
console.log(numerosOrdenados.join());
console.log(numerosOrdenados);