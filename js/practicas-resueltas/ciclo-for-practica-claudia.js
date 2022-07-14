//1.Realice un programa que enumere los paises de la siguiente lista

const paises = ['Canada', 'USA', 'Mexico', 'Australia'];

for (let index = 0; index < paises.length; index++) {
    const element = paises[index];
    console.log(`${index} : ${element}`)
}

//2.Crear un ciclo for que cuente de 0 a 100
for (let index = 1; index <= 100; index++) {
    const element = [index];
    console.log(`${index} `)
}


//3.Haz una tabla de multiplicar utilizando el ciclo for

let multiplo = 4


for (let index = 1; index <= 10; index++) {
    const element = [index];
    console.log(`${multiplo*index}`)
}


//4.Imprima los números del 1 a 10 al revés utilizando el ciclo for



for (let index = 10; index >= 0; index--) {

    console.log(index)
}

//5.Crear un bucle que cuente todos los números pares hasta el 100



for (let index = 0; index <= 100; index++) {
    if ((index % 2) == 0) {
        console.log(index);
    }
}



//6.Cree un bucle que sume los números del 100 al 200

let suma = 0
for (let index = 100; index <= 200; index++) {
    suma = +index;
    console.log(suma)
}
//7.Imprima el siguiente patrón con el ciclo for por consola:
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
let numero = 5;

for (let i= 1; i <= numero; i++) {
  let resultado = "";
  for (let j = 1; j <= i; j++) {
    resultado += "* ";
  }
  console.log(resultado);
}

 numero  = numero  - 1;

for (let a = numero; a >= 1; a--) {
  let resultadoDos = "";
  for (let b = a; b >= 1; b--) {
    resultadoDos += "* ";
  }
  console.log( resultadoDos);
}


//8.Imprima el siguiente patrón con el ciclo for por consola:

//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1
for(let i=5; i>=1; i--){
  let patron = ''
  for(let j=i; j>=1; j--){
    patron = `${i} ${j}`
  }
  console.log(patron)
}


//9.Escriba un código JS para encontrar el número más grande en una matriz 
 let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123 ];

let masGrande = 0

for(let i=0; i<=arr.length-1; i++){
  if(masGrande < arr[i]){
    masGrande = arr[i]
  }
}
console.log( masGrande)


//10. Programa para encontrar el número de conteo de ceros en la matriz
// let arr2 = [[0,1,1],[0,1,0],[1,0,0]];
let arr2 = [
  [0,1,1],
  [0,1,0],
  [1,0,0]
]

let cunatosCeros = 0

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[i][j] === 0) {
        cunatosCeros += 1;
    }
  }
}
console.log(cunatosCeros);
