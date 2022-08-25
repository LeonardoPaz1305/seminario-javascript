//1.Realice un programa que enumere los paises de la siguiente lista

const paises = ['Canada', 'USA', 'Mexico', 'Australia'];
for (var i = 0; i < paises.length; i++) {
    console.log(i + " " + paises[i]);

}

//2.Crear un ciclo for que cuente de 0 a 100

for(var i=0; i<101; i++){
    console.log(i)
}
//3.Haz una tabla de multiplicar utilizando el ciclo for

let numero = 12;
for(let i=0; i<12; i++){
    console.log(`${numero} X ${i} = ${numero * i}`)
}

//4.Imprima los números del 1 a 10 al revés utilizando el ciclo for

for(var i = 10; i >= 0; i --){
    console.log(i)
  }
    
//5.Crear un bucle que cuente todos los números pares hasta el 100

let pares= 100;

for(let i=1; i<=pares; i++){
    if(i%2===0 && i!=0){
        console.log(`${i} es par`)
    }
}



//6.Cree un bucle que sume los números del 100 al 200
let sumatoria = 0;
for (let i = 100; i <= 200; i++) {
     sumatoria = sumatoria+ i
}
console.log(sumatoria);

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

// Solución1
// for(let i = 1; i <= 6; ++i){
//     let resultado = '';

//     for(let j = 1; j <= i; ++j){
//         resultado += '*';
//     }
//     console.log(resultado)
// }

//Solución 2
let ent, cad;
ent = 4;
cad = ('*').repeat(ent * 1 + 1) + '\n';

for(let i = ent -1; i >= 0; i--){
    cad = cad + ('*').repeat(i + 1) + '\n';
    cad = ('*').repeat(i + 1) + '\n' + cad;
}
console.log(cad)

//Solución3
// let l = 5;
// let tmp = 0;
// for (let i = 0; i <= ((l * 2) -1); i++){
//     tmp += i > l ? 1 : 0
//     console.log((" *").repeat((i > l ? l : i) - tmp))
// }

//8.Imprima el siguiente patrón con el ciclo for por consola:

//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1

for(var a = 5; a >= 1; a --){
    var result = '';
    for(var b = a; b >= 1; b --){
      result = `${result} ${b}`
    }
    console.log(result)
  }


//9.Escriba un código JS para encontrar el número más grande en una matriz

let arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
console.log(Math.max(...arr));

//10. Programa para encontrar el número de conteo de ceros en la matriz

let arr2 = [[0,1,1],[0,1,0],[1,0,0]];
function cuantosRepetidos(array, elemento) {//Aquí le llamo elemento
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        for(item of array[i]){/*Aquí le llamo item para no pisar la variable, además hago el loop sobre array[i]!*/
            if(item === elemento){
                contador++;
            }
        }
    }
    return contador;
}
console.log(cuantosRepetidos(arr2, 0));