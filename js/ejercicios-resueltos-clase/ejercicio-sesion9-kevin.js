let nombre = "Kevin",
  edad = 29,
  pais = "Peru";

if (edad >= 18) {
  console.log(`${nombre} En el pais ${pais} eres Mayor de edad `);
} else {
  console.log(`${nombre} En el pais ${pais} eres Menor de edad `);
}

// 2
let precio_kilometro = 0;
let vehiculo = "moto";
let kms_recorridos = 40;
let litros_consumidos = 20;

let total_pagar = 0;

if (vehiculo == "coche") {
  precio_kilometro = 0.1;
} else if (vehiculo == "moto") {
  precio_kilometro = 0.2;
} else if (vehiculo == "autobus") {
  precio_kilometro = 0.5;
}

total_pagar = precio_kilometro * kms_recorridos;

if (litros_consumidos >= 0 && litros_consumidos <= 100) {
  total_pagar = total_pagar + 1;
} else if (litros_consumidos > 100) {
  total_pagar = total_pagar + 2;
}

console.log(
  "El vehiculo es: " +
    vehiculo +
    " y los kilometros recorridos son " +
    kms_recorridos +
    " y el Total a pagar es: " +
    total_pagar
);
