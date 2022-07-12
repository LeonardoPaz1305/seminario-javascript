//1.Realice un programa que enumere los paises de la siguiente lista
console.log( "1.- Programa que enumera paises")
const paises = ['Canada', 'USA', 'Mexico', 'Australia'];

for (let i = 0; i < paises.length; i++) {
    console.log(i + " " + paises[i]);

}


//2.Crear un ciclo for que cuente de 0 a 100
console.log( "\n" + "2.- Ciclo for que cuenta de 0 a 100")
for (let i = 0; i <= 100; i++) {
    console.log(i)

}


//3.Haz una tabla de multiplicar utilizando el ciclo for
console.log( "\n" + "3.- Ciclo for para tabla de multiplicar ")
let numero = 12;
for (let i = 0; i <= 12; i++) {

    console.log(numero * i)

}


//4.Imprima los números del 1 a 10 al revés utilizando el ciclo for
console.log( "\n" + "4.- Ciclo for para imprimir del 1 al 10 al reves ")
for (let i = 10; i >= 0 ; i--) {
    console.log(i)
}



//5.Crear un bucle que cuente todos los números pares hasta el 100
console.log( "\n" + "5.- Ciclo for que cuenta los numeros pares del 0 al 100 ")

let pares = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    pares = i;
    console.log( pares.length );
  }
}

//6.Cree un bucle que sume los números del 100 al 200
console.log( "\n" + "6.- Ciclo for que suma los números del 100 al 200 ")

let num,Acumula,suma
        Acumula=100;
      
        num=200;
       
         for(let i=101; i <= num; i++){
         
         suma=Acumula+i;
         Acumula=suma;                                                             
         console.log(suma+",");
         
}



console.log( "\n" + "7.- Imprima el siguiente patrón con el ciclo for por consola ")
//7.Imprima el siguiente patrón con el ciclo for por consola:
for(let i = 0; i <= 5; i++){
    let cadena = '';

    for(let j = 0; j < i; j++){
      cadena += '* ';
    }
    console.log(cadena)
  }

  for (let i = 4; i > 0; i--){
    let cadena = '';

    for(let j = 0; j < i; j++){
      cadena += '* ';
    }
    console.log(cadena)
  }

//8.Imprima el siguiente patrón con el ciclo for por consola:

//5 4 3 2 1
//4 3 2 1
//3 2 1
//2 1
//1
console.log( "\n" + "8.- Imprima el siguiente patrón con el ciclo for por consola ")
for(let i = 5; i > 0; i--){

    for(let j = 0; j < i; j++){
        console.log(i)
    }
    console.log("\n")
  }


//9.Escriba un código JS para encontrar el número más grande en una matriz
console.log( "\n" + "9.- Escriba un código JS para encontrar el número más grande en una matriz ")

let arr = [2, 45, 3, 67, 34, 997, 34, 1345, 123];

let maximo = Math.max(...arr);
console.log(maximo)


//10. Programa para encontrar el número de conteo de ceros en la matriz


console.log( "\n" + "10.- Programa para encontrar el número de conteo de ceros en la matriz ")
let arr2 = [[0,1,1],[0,1,0],[1,0,0]];

    let count = 0;
    for (let i = 0; i < arr2.length; i++) {

        for (let j = 0; j < arr2[i].length; j++) {
          count += arr2[i][j] == 0 ? 1 : 0
        }

    }
    console.log(count) 