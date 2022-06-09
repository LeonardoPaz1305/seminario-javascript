//1) Escriba una función javascript para comprobar si una 'entrada' es una matriz o no.

const esMatriz = entrada => {
  if(Array.isArray(entrada)) return "es una matriz verificada por el metodo del objeto Array";
 else return "no es una matriz";
}
console.log(esMatriz([1,2,3,4,5]));


//2) Escribir una función JavaScript para clonar un Array.

const cloneArray = (entrada) => {

    let copia = entrada.slice();

    console.log(entrada,"entrada")
    console.log(copia,"copia")
   

}
let array = [8, 2, 7, 4, 6];

 console.log(cloneArray(array))



//3) Escriba una función JavaScript para obtener el primer elemento de un Array. 
//Pasar un parámetro 'n' devolverá los primeros 'n' elementos del Array.

const first = (entrada,n) => {

  let primer = entrada[0];
  
  let cantidadElementos = entrada.slice(0, n);

  let unir = primer +"---"+ cantidadElementos;

  return unir; 
}

console.log(first([3, 2, 8, 4, 9],2));





//4) Escriba una función JavaScript para obtener el último elemento de un Array. Pasar un parámetro 'n' devolverá los últimos 'n' elementos del Array.

const last = (entrada, n) => {  
  
  let ultimo = entrada[entrada.length - 1];
  let cantidadElementos = entrada.slice(entrada.length - n);

  let unir = ultimo +"\n"+ cantidadElementos;

  return unir; 

}
 console.log(last([1, 2, 3, 4, 5],3));


//5) Escriba un programa JavaScript simple para unir todos los elementos de la siguiente matriz en una cadena.
// Matriz de muestra: colores = ["Rojo", "Verde", "Blanco", "Negro"]

const colores = (entrada) => {
  return entrada.join(",")
}

let nuevoarr = ["Rojo", "Verde", "Blanco", "Negro"]

console.log( colores(nuevoarr) );


//6) Escriba un programa JavaScript para ordenar los elementos de una matriz.
// Matriz de muestra: numEnteros = [ -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1 ];

const numEnteros = function(entrada) {
  return entrada.sort();
} 

console.log(numEnteros([ -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1]));



//7) Escriba un programa JavaScript que imprima los elementos de la siguiente matriz.
// Matriz de muestras: let matrices = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Ejemplo de salida:
/*
    Fila 0
      1
      2
      1
      24
    Fila 1
      8
      11
      9
      4
*/

const printMatriz = (entrada) => {

  for (let i = 0; i < entrada.length; i++) {

      console.log("Fila "+ i);
      for (let j = 0; j < entrada[i].length; j++) {
          console.log(entrada[i][j]);
      }

  }

}

let matrix = [ [1, 2, 333],[4, 5, 666],[7, 8, 999] ] 
printMatriz(matrix);


//8) Escribe una función JavaScript para encontrar la suma de cuadrados de un array numérico.

const sumSquare = (entrada) => {

  let sum = 0;

  for (let i = 0; i < entrada.length; i++) {

      sum = sum + Math.pow(entrada[i], 2);
  }               

  return sum;
}

console.log( sumSquare([1, 2, 3, 4, 5]) ); 




//9) Escriba un programa JavaScript para calcular la suma y la multiplicacion de una matriz de enteros.

const sumaAndMultiply = (entrada) => {

  let sum = entrada.reduce(function(a, b){
      return a+b
  })
      
 let multiply = entrada.reduce((a, b) => a * b);

  return [sum, multiply];
}

console.log( sumaAndMultiply([9,1,2,3]) );



//10) Escriba una función JavaScript para encontrar la diferencia de dos arrays.
// Example
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
const differenceOf2Arrays = (array1, array2) => {

  let   difference = array2.filter(element => !array1.includes(element))
 
   let  difference2 = array1.filter(element => !array2.includes(element))
 
 difference = [...difference, ...difference2];
 
 console.log(difference);
 
 }
 
 differenceOf2Arrays([1,2,3], [100,2,1,10]);