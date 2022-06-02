// 1
let edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// 2
let contrasena1 = "A1234567";
let contrasena2 = "a1234567";
if (contrasena1.toLocaleLowerCase() === contrasena2.toLocaleLowerCase()) {
  console.log("Las contraseñas coinciden");
} else {
  console.log("Las contraseñas no coinciden");
}

// 3
let numero1 = 20,
  numero2 = 0;
if (numero2 == 0) {
  console.log("Error, divisor debe ser diferente de cero");
} else {
  console.log("La division es: " + numero1 / numero2);
}

// 4
let numero3 = 33;
if (numero3 % 2 == 0) {
  console.log("El numero " + numero3 + " es par");
} else {
  console.log("El numero " + numero3 + " es impar");
}

// 5
let edad2 = 20,
  ingresos = 930;
if (edad2 >= 17 && ingresos >= 930) {
  console.log("El usuario tiene que tributar");
} else {
  console.log("El usuario no tiene que tributar");
}

// 6
let nombre = "Maria",
  sexo = "F";

if (sexo.toUpperCase() == "F") {
  if (nombre[0].toUpperCase() <= "M") {
    console.log("Grupo A");
  } else {
    console.log("Grupo B");
  }
} else {
  if (nombre[0].toUpperCase() >= "N") {
    console.log("Grupo A");
  } else {
    console.log("Grupo B");
  }
}

// 9
let puntuacion = 0.9;
let nivel = "";
if (puntuacion == 0.0) {
  nivel = "Inaceptable";
} else if (puntuacion == 0.4) {
  nivel = "Aceptable";
} else if (puntuacion >= 0.6) {
  nivel = "Meritorio";
}

if (nivel == "") {
  console.log("No permitido");
} else {
  console.log(
    "El nivel es: " + nivel + " y el dinero conseguido es: " + puntuacion * 2400
  );
}
