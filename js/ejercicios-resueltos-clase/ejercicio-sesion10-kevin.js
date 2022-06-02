// 1
let edad = 120;
let persona = "";
if (edad >= 1 && edad <= 12) {
  persona = "niño";
} else if (edad >= 13 && edad <= 17) {
  persona = "Adolescente";
} else if (edad >= 18 && edad <= 60) {
  persona = "Adulto";
} else if (edad >= 61 && edad <= 120) {
  persona = "Anciano";
}
console.log("Eres un " + persona);

// 2
let nota = 8;
if (nota >= 0 && nota <= 3) {
  console.log("Aplazado");
} else if (nota >= 4 && nota <= 6) {
  console.log("Estudia para la proxima");
} else if (nota >= 7 && nota <= 9) {
  console.log("Muy bien, continua asi.");
} else if (nota == 10) {
  console.log("Excelente");
} else {
  console.log("Nota mal ingresada");
}
