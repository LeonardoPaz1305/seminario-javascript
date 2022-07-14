//1.Realice un programa que enumere los paises de la siguiente lista 
//let arr = ["Peru", "Brasil", "Chile","EEUU"];

let arr = ["Peru", "Brasil", "Chile", "EEUU"]


for (let i = 0; i < arr.length; i++) {
  // console.log(i + 1 + ". " + arr[i])
}

//2.Crear un ciclo for que cuente de 0 a 100
for (let i = 0; i <= 100; i++) {
   // console.log(i)
}



//3.Haz una tabla de multiplicar utilizando el ciclo for
let number = 5
for (let i = 0; i <= 12; i++) {
    //console.log(`${number} x ${i} = ${number * i}`)
}


// 1 x 1 = 3
// 1 x 2 = 3
// 1 x 3 = 3

//4.Imprima los números del 1 a 10 al revés utilizando el ciclo for 

for (let i = 10; i >= 1; i--) {
   // console.log(i)
}

//5.Crear un bucle que cuente todos los números pares hasta el 100

for (let i = 1; i <= 100; i++) {
if (i % 2 == 0) console.log(i)
}

//6.Cree un bucle que sume los números del 100 al 200
let sum = 0
for (let i = 100; i <= 200; i++) {
    sum = sum + i
}
//console.log(sum)

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



for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
        string += "*";
    }
    string += "\n";
}
//console.log(string);


//8.Imprima el siguiente patrón con el ciclo for por consola:

//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1


let n = 5; 
let string = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        string += j;
    }
    string += "\n";
}
//console.log(string);

//9.Escriba un código JS para encontrar el número más grande en una matriz

let array = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let mayor = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
        mayor = array[i]
    }
}
//console.log(mayor)

//10. Programa para encontrar el número de conteo de ceros en la matriz

let arr2 = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];

let contador = 0
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
    for (let j = 0; j < arr2[i].length; i++) {
        if (true) {
            contador = contador + 1
            console.log(arr2[i][j]);
        }
    }
}
//console.log(contador)