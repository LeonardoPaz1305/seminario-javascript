//Ejercicio 2)
/* 
Realizar un ejercicio en el cual se definan las siguientes variables 
“precio_kilometro”, 
“vehiculo”, 
“kms_recorridos”, 
“litros_consumidos”. 

A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones.

Si el vehículo es “coche”, el precio kilometro ha de ser 0.10, 
si es “moto” ha de ser 0.20 y 
si es “autobús” 0.5. 

si los litros consumidos están entre 0 y 100 se ha de añadir 1 al total, si es mayor la cantidad de litros consumidos se ha de añadir 2 al total.

*/

let precio_kilometro;
let vehiculo = "moto";
let kms_recorridos = 10;
let litros_consumidos = 80;
let total;

if (vehiculo == "coche") {
    precio_kilometro = 0.10;
}
if (vehiculo == "moto") {
    precio_kilometro = 0.20;
}
if (vehiculo == "autobus") {
    precio_kilometro = 0.50;
}

total = kms_recorridos * precio_kilometro; 

if (litros_consumidos <= 100) { 
    total = total  + 1;
}
if (litros_consumidos > 100){
    total = total  + 2;
}

console.log(`Usted a recorrido ${kms_recorridos}kms en ${vehiculo} el total a pagar es S/${total}`)

