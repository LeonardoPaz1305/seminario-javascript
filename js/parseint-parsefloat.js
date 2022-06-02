let cadena1, cadena2, cadena3, cadena4, cadena5, cadena6;

cadena1 = "28";
cadena2 = "28.33";
cadena3 = "28 dias tienes febrero";
cadena4 = "28*3";
cadena5 = "Marcos tiene 50";
cadena6 = "S/50";

//parseInt se usa para convertir en Entero
let resultado = parseInt(cadena6);
console.log(resultado);
console.log(typeof resultado);

//parseFloat se usa para convertir en numero de punto flotante a con decimales
let resultado2 = parseFloat(cadena6);
console.log(resultado2);
console.log(typeof resultado2);

let resultado3 = +(cadena1);
console.log(resultado3);
console.log(typeof resultado3);