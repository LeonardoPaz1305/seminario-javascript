function operaciones(a, b, tipo) {
  let resultado = 0;
  if (tipo == "SUMA") {
    resultado = a + b;
  } else if (tipo == "RESTA") {
    resultado = a - b;
  } else if (tipo == "MULTIPLICACION") {
    resultado = a * b;
  } else if (tipo == "DIVISION") {
    resultado = a / b;
  } else if (tipo == "POTENCIA") {
    resultado = a ** b;
  } else if (tipo == "RESTO") {
    resultado = a % b;
  } else {
    resultado = "no permitido";
  }
  return console.log(tipo, ":", resultado);
}

let a = 5,
  b = 8;
operaciones(a, b, "SUMA");
operaciones(45, 34, "RESTA");
operaciones(a, b, "MULTIPLICACION");
operaciones(a, b, "DIVISION");
operaciones(a, b, "POTENCIA");
operaciones(a, b, "RESTO");
operaciones(a, b, "CUALQUIERCOSA");
