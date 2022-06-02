/*Ejercicio 1
/*Realizar un ejercicio en el cual se definan las variables necesarias para solicitar una “edad”, un “nombre” y “país”. 
Una vez definidas las variables se ha de visualizar un mensaje en la consola que diga “En el Pais de "nombre pais" 
eres Mayor de Edad” o “En el Pais de "nombre pais" eres Menor de Edad”, 
dependiendo de que la edad introducida sea mayor o menor de 18 años.*/

let name = "Jimy";
let edad = 20;
let pais = "Peru";

if (edad >= 18) {
    console.log(`${name} en el pais de  ${pais} eres mayor de edad`);
} else {
    console.log(`${name} en el pais de  ${pais} eres menor de edad`);
}

/*Ejercicio 2
Realizar un ejercicio en la cual se definan las siguientes variables.
- precio_kilometro
- vehiculo
- kms recorridos
- litros consumidos

A continuacion defina y realice los calculos para el total a pagar, teniendo en cuenta las siguientes
consideraciones.

si el vehiculo es coche el precio por kilometro es 0.10
si es de moto ha de ser 0.20
si es autobus 0.5

si los litros consumidos estan entre 0 y 100 se ha de añadir 1 al total,
si es mayor la cantidad de litro consumidos se ha de añadir 2 al total
*/

let precio_kilometro = 5;
let vehiculo = "moto";
let kms_recorrido = 10;
let litro_consumido = 120;

if (vehiculo == "coche") {
    precio_kilometro = 0.10;
}
if (vehiculo == "moto") {
    precio_kilometro = 0.20;
}
if (vehiculo == "autobus") {
    precio_kilometro = 0.5;
}

let totalPagarxKms = kms_recorrido * precio_kilometro;
let totalPagar = 0;

if (litro_consumido <= 100) {
    totalPagar = totalPagarxKms + 1;
} else {
    totalPagar = totalPagarxKms + 2;
}

console.log(`La movilidad ${vehiculo} ha recorrido ${kms_recorrido} kms consumiendo ${litro_consumido} litros por lo cual tiene que pagar ${totalPagar} soles`);