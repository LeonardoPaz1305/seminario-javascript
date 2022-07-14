//1.Realice un programa que enumere los paises de la siguiente lista
// const paises = ['Canada', 'USA', 'Mexico', 'Australia'];
const paises = ['Canada', 'USA', 'Mexico', 'Australia']

for(let i=0; i<paises.length; i++){
  if(i == 0){}
  console.log(`${i+1} ${paises[i]}`)
}


//2.Crear un ciclo for que cuente de 0 a 100
for(let i=0; i<=100; i++){
  console.log(i)
}


//3.Haz una tabla de multiplicar utilizando el ciclo for
let num =9

for(let i=0; i <= 12; i++){
  console.log(`${num} x ${i} = ${num * i}`)
}


//4.Imprima los números del 1 a 10 al revés utilizando el ciclo for
for(let i=10; i>=0; i--){
  console.log(i)
}


//5.Crear un bucle que cuente todos los números pares hasta el 100
for(let i=0; i<=100; i++){
  if(i%2 !== 1){
      console.log(i)
  }
}


//6.Cree un bucle que sume los números del 100 al 200
let acum = 0
for(let i=100; i <=200; i++){
  acum = acum + i
  console.log(acum)
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
let n = 5;

for (let f = 1; f <= num; f++) {
  let result = "";
  for (let c = 1; c <= f; c++) {
    result += "* ";
  }
  console.log(result);
}

n = n - 1;

for (let x = num; x >= 1; x--) {
  let r = "";
  for (let y = x; y >= 1; y--) {
    r += "* ";
  }
  console.log(r);
}


//8.Imprima el siguiente patrón con el ciclo for por consola:

//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1
for(let f=5; f>=1; f--){
  let r = ''
  for(let c=f; c>=1; c--){
    r = `${r} ${c}`
  }
  console.log(r)
}


//9.Escriba un código JS para encontrar el número más grande en una matriz 
// let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123]
let mayor = 0

for(let i=0; i<=arr.length-1; i++){
  if(mayor < arr[i]){
    mayor = arr[i]
  }
}
console.log(mayor)


//10. Programa para encontrar el número de conteo de ceros en la matriz
// let arr2 = [[0,1,1],[0,1,0],[1,0,0]];
let arr2 = [
  [0,1,1],
  [0,1,0],
  [1,0,0]
]

let quantityZeros = 0

for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[i][j] === 0) {
      quantityZeros += 1;
    }
  }
}
console.log(quantityZeros);

