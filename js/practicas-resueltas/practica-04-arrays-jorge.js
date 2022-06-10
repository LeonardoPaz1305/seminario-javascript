//1) Escriba una función javascript para comprobar si una 'entrada' es una matriz o no.
      const isMatriz = (entrada) => {

        // if (entrada.length === 0) return " es una matriz por el tamaño de la matriz"
        if(Array.isArray(entrada)) return "Es un Array o matriz ";
        else
         return "No es un Array o matriz "
      }
      console.log(isMatriz([]))


//2) Escribir una función JavaScript para clonar un Array.
const clonarArray = (entrada) => {

    let clonar = entrada.slice();

    console.log(entrada,"Original", clonar,"Copia")
    return clonar;

}
clonarArray([2, 3, 5, "gato", "Azul"]);




//3) Escriba una función JavaScript para obtener el primer elemento de un Array. 
//Pasar un parámetro 'n' devolverá los primeros 'n' elementos del Array.
      const obtener = (entrada, n) =>{
         let primer =  entrada[0];

         let primerElementos = entrada.slice(0, n);

         let unir = primer + "\n" + primerElementos;

         return unir;

      }

      console.log(obtener([1,2,3,4,5],3))
//4) Escriba una función JavaScript para obtener el último elemento de un
// Array. Pasar un parámetro 'n' devolverá los últimos 'n' elementos del Array.
      const obtUltimo = (entrada, n) =>{
        let ultimo =  entrada[entrada.length - 1];

        let ultimoElementos = entrada.slice(entrada.length - n);

        let unir = ultimo + "\n" + ultimoElementos;

        return unir;

      }

      console.log(obtUltimo([1,2,3,4,5],3))

//5) Escriba un programa JavaScript simple para unir todos los elementos 
//de la siguiente matriz en una cadena. 
//Matriz de muestra: colores = ["Rojo", "Verde", "Blanco", "Negro"]

      const unirElements = (entrada) => {
        return entrada.join(" ")
      }
      let newArr = ["Rojo", "Verde", "Blanco", "Negro",5]

      console.log(unirElements(newArr));

//6) Escriba un programa JavaScript para ordenar los elementos de una matriz.
// Matriz de muestra: numEnteros = [ -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1 ];

      const ordenar = (entrada) => entrada.sort();
       
     

      console.log(ordenar(["Zapato", "Agua","Rosa", "Casa", -3, 8, 7, 6, 5, -4, 3, 2, 1, 0, 4, -2, -1 ]));

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

      const imprimeMatriz = (entrada) =>{

        for (let i = 0; i < entrada.length; i++) {
          //  console.log(entrada[i]);
              console.log("fila: " + i);
          for (let j = 0; j < entrada[i].length; j++) {
            console.log(entrada[i][j]);
            
          }
          
        }
      }

      let matrices = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27],
                       [7, 4, 28, 14], [3, 10, 26, 7]];
                    
      imprimeMatriz(matrices);

//8) Escribe una función JavaScript para encontrar la suma de cuadrados
// de un array numérico.

      const sumaCuadrado = (entrada) => {
        let suma = 0;

        for (let i = 0; i < entrada.length; i++) {
          suma = suma + Math.pow(entrada[i], 2);     
        }
        return suma
      }

      console.log("La suma es: " + sumaCuadrado([1,2,3,4]))
//9) Escriba un programa JavaScript para calcular la suma y la multiplicacion de una matriz de enteros.

      const sumaymultiplica = (entrada) => {
        let suma = entrada.reduce((a,b) => a+b);

        let multiplica = entrada.reduce((a,b) => a*b);

        return ["la suma es: " + suma, "la multiplicacion es: " + multiplica]
      }

      console.log(sumaymultiplica([1,2,3,5]))
//10) Escriba una función JavaScript para encontrar la diferencia de dos arrays.
// Example
// console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

const differenceOf2Arrays = (array1, array2) => {

  let diferentes = array1.filter(elementos => !array2.includes(elementos))

  let diferente2 = array2.filter(elementos => !array1.includes(elementos))

  diferentes = [ ...diferente2,...diferentes];

  console.log(diferentes.reverse())
}
differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]);