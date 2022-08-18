//Practica While jorge 

//1. Crear una funcion para encontrar el promedio de 5 notas usando el ciclo while
console.log("1.Crear una funcion para encontrar el promedio de 5 notas usando el ciclo while")
function promediar(notasrray) {
    let i = 0, suma = 0, tamArray = notasrray.length;
    while (i < tamArray) {
      suma += notasrray[
        i++
    ];
    }
    return suma / tamArray;
  }
  let notasrray = [12, 15, 20, 14, 17];
  let resultado = promediar(notasrray);

  console.log(resultado)

//2. Crear una funcion para encontrar la suma de los dígitos de un número entero usando el ciclo while
console.log("2.Crear una funcion para encontrar la suma de los dígitos de un número entero")
//ejemplo resultado Entero: 357, la suma de sus digitos es: 15

function SumaEnteros(num) {
    let suma = 0;
    while (num > 0) {
      suma += num % 10;
      num = parseInt(num / 10);
    }
    return suma;
  }
  console.log(SumaEnteros(357));

//3.Realizar un programa que realice lo siguiente utilizando while
console.log("3.Realizar un programa que realice lo siguiente utilizando while");
// En una empresa trabajan n empleados cuyos sueldos oscilan entre 100$ y 500$
const sueldos = [350,150,200,320,310,260,420]
console.log("Cuantos empleados hay en la empresa? \n la empresa tiene " + sueldos.length + " empleados")

let index = 1, sueldo = 0, cobran100a500$=1, cobranMasde500$=0, gastoEmpresa=0;

while (index < sueldos.length) {
  sueldo = sueldos[index];
  console.log("Cual es el sueldo del empleado " + index +"?" +" \n el sueldo del empleado " + index +" es: " + sueldo);

  if (sueldo>= 100 && sueldo<=500) {
    cobran100a500$ += 1;
  }
  else if (sueldo > 500){
    cobranMasde500$ += 1;
  }

  gastoEmpresa +=sueldo; 
  index++;
}

console.log("Los empleados que cobran entre 100$ y 500$ son: " + cobran100a500$);
console.log("Los empleados que cobran 500$ o mas son: " + cobranMasde500$);
console.log("Los gatos de la empresa son: " + gastoEmpresa);

// realizar un programa que informe cuantos empleados cobran entre 100$ y 500$,
// cuantos cobran mas de 500$. Ademas el programa debera informar sobre el importe
// que gasta la empresa en sueldos al personal
// const sueldos = [350,150,200,320,310,260,420]

//4. Escriba una funcion JavaScript para calcular el máximo común divisor (MCD) de dos enteros positivos usando el ciclo while.
console.log("4.Escriba una funcion JavaScript para calcular (MCD) de 2 enteros positivos usando el ciclo while")

const calcularMcd = (num1, num2) => {
    let recolecta = 0;
    while (num2 > 0) {
      recolecta = num2;
      num2 = num1 % num2;
      num1 = recolecta;
    }
    return num1;
  };
  console.log(calcularMcd(18, 22))

//5. Escriba una funcion para encontrar todos los números pares 
// que se encuentran entre dos números ingresados usando el ciclo while.
console.log("5. Escriba una funcion para encontrar todos los números pares ")
function numpares(num1, num2) {
  
  if (num1 > num2) {
    while (num1 > num2) {
      
      if (num2 % 2 == 0) {
        console.log("El " + num2 + " es par")
      }
      num2++;
    }
  }else {
    while (num1 > num2) {
      
      if (num1 % 2 == 0) {
        console.log("El " + num1 + " es par")
      }
      num1++;
    }
  }  
}
numpares(21, 12)

//6. Escriba una funcion para invertir un numero por ejemplo 67023 usando el ciclo while.
console.log("6.Escriba una funcion para invertir un numero por ejemplo 67023 usando el ciclo while ")
function voltear(num) {

    let voltear = 0;
    while (num != 0) {
      voltear = 10 * voltear + num % 10
      num = (Math.floor(num / 10))
    }
    return voltear

    }
    console.log(voltear(652))

//7. Escriba una funcion para mostrar los nombres de los dígitos de un número 
// por ejemplo, si el número es 231, la salida debe ser Dos Tres Uno usando el ciclo while.
// puedes apoyarte de estos objetos para convertir el entero en array 
// Array.from(String(231), Number); salida : [ 2, 3, 1 ];
console.log("7. Escriba una funcion para mostrar los nombres de los dígitos de un número  ")

    const nameDigitos = (a) =>{
        let num= Array.from(String(a), Number);
        let i= 0;
        let n = {0: "Cero", 1: "Uno", 2: "Dos", 3: "Tres", 4: "Cuatro", 5: "Cinco", 6: "Seis", 7: "Siete", 8: "Ocho", 9: "Nueve" }
        let numText = '';
        while(i< num.length){
            numText += n[num[i]] + " ";
            i++;
        }
        console.log(numText);
    }
    nameDigitos(231);

//8. Escriba una funcion para mostrar la suma de números impares y números pares 
// por separado que se encuentran entre dos números ingresados por el usuario 
// (incluidos ambos números) usando el ciclo while.

console.log("8.Escriba una funcion para mostrar la suma de números impares y números pares  ")

function sumaparImpar(a, b) {
  let num1 =a;
  let num2 =b;
  let sumaPares = 0;
  let sumaImpares = 0;

  if (num1 > num2) {
    while (num2 <= num1) {
      if (num2 % 2 == 0) {
        sumaPares += num2;
        num2++;
      }
      else{
        sumaImpares += num2;
        num2++;
      }
    }
  }else {
    while (num1 <= num2) {
      if (num1 % 2 == 0) {
        sumaPares += num1;
        num1++;
      }else{
        sumaImpares += num1;
        num1++;
      }
    }
  } 
  console.log("Primer numero imgresado es: " + a) 
  console.log("Segundo numero imgresado es: " + b)
  console.log("La suma de los numeros pares es: " + sumaPares) 
  console.log("La suma de los numeros Impares es: " + sumaImparesPares)
}
numpares(21, 12)