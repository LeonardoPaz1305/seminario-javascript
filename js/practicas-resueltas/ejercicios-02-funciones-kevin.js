// 1
let imprimirDatos = (nombre, apellido, fecha) => {
  console.log(nombre + " " + apellido + " " + fecha);
};
imprimirDatos("kevin", "zambrano", "13/04/1992");

// 2
let imprimirTipo = (parameter) => {
  console.log(parameter + " es de tipo:  " + typeof parameter);
};
imprimirTipo("afsdfasdf");
imprimirTipo(1234123);
imprimirTipo(true);

// 3
let areaPerimetroTriangulo = (base, altura, lado) => {
  let area = (base * altura) / 2;
  let perimetro = base + lado * 2;
  console.log(
    "El area del triangulo es: " +
      area +
      " , El perimetro del triangulo es :" +
      perimetro
  );
};
areaPerimetroTriangulo(12, 15, 16.16);

// 4
let areaCuadrado = (lado) => lado * lado;
console.log("El area del cuadrado es: " + areaCuadrado(5));

// 5
let diametroCirculo = (radio) => radio * 2;
console.log("El diametro del circulo es : " + diametroCirculo(6));

// 6
function multiply(a, b) {
  return a * b;
}
console.log(multiply(3, 4));

// 7
let operacionCombinada = (a, b) => a * b + b / a;
console.log(
  "La respuesta de la operacion combinada es: " + operacionCombinada(3, 4)
);

// 8
let fraseFunction = (frase) => frase;
let imprimirFrase = (frase) => {
  console.log("Como yo siempre digo, " + frase);
};
imprimirFrase(fraseFunction("Primero muerto antes que perder la vida!"));
