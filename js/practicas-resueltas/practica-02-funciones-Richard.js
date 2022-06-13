/* Ejercicios Funciones */

//1) Crear una funcion donde retorne su nombre, apellidos y fecha de nacimiento, guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.

function datos(nom, ape, fecha) {
    this.nom = nom;
    this.ape = ape;
    this.fecha = fecha;
    console.log("Me llamo: " + this.nom + " mi apellido es: " + this.ape + "y mi fecha de nacimiento es: " + this.fecha + ".");
}

datos("Richard", "Cairampoma", "19/11/84");

//2) Cree una funcion donde pases los parametros booleano, String y number, al retornar que muestre el argumento pasado y que tipo de dato primitivo es.
const TIPO_DE_DATO = pregunta2()
console.log(pregunta2(30, 'Richard', true));

function pregunta2(booleano, String, number) {
    let dato_booleano = typeof(booleano);
    dato_string = typeof(String);
    dato_number = typeof(number);
    return `primer dato es: ${dato_booleano} segundo dato es ${dato_string} y el tercer dato es ${dato_number}`;
}


const datosPrimitivos = (booleano, cadena, numero) => {
    let typeBooleano = typeof(booleano);
    let typeCadena = typeof(cadena);
    let typeNumero = typeof(numero);

    return `
      - el dato "${booleano}" es de tipo ${typeBooleano}
      - el texto "${cadena}" es de tipo ${typeCadena}
      - el numero "${numero}" es de tipo ${typeNumero}
  `;
}
const RESULT_PRIMITIVO = datosPrimitivos(true, 'Lorem Ipsum', 777);
console.log(RESULT_PRIMITIVO);

//3) Cree una funcion donde se calcule el area y perimetro de un Triangulo: base = 12cm, Altura = 15cm, Lado = 16,16cm, guardar la funcion en una variable pasando los argumentos y que la respuesta sea elaborada.

const triangulo = (base, altura, lado) => {
    let areaTriangulo = (base * altura) / 2;
    let perimetroTriangulo = base + (lado * 2);
    return `
      - El Area del triangulo = ${areaTriangulo} cm2
      - El perimetro del triangulo = ${perimetroTriangulo} cm
  `;
}
const RESULT_TRIANGULO = triangulo(12, 15, 16.16);
console.log(RESULT_TRIANGULO);

//4) Cree una funcion donde se calcule el area de un cuadrado cuyos cuatro lados son todos iguales de longitud a=5 cm.

const cuadrado = a => `El área del cuadrado de lado ${a} cm es de ${a ** 2} cm2.`;
const RESULT_CUADRADO = cuadrado(5);
console.log(RESULT_CUADRADO);

//5) Plasme en un funcion el calculo del diametro de un circulo cuyo radio es 6, guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.

const circulo = radio => `El diámetro de este círculo es 2 x ${radio} = ${2 * radio} unidades.`;
const RESULT_CIRCULO = circulo(6);
console.log(RESULT_CIRCULO);

//6) La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla.

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 4));

//7) Reducir la función en una sola linea, almacenar la funcion en una variable y luego por consola mostrar el resultado
// function operacionCombinada(a, b){
//     let resultado = (a * b) + (b / a);
//     return resultado;
// }

const operacionCombinada = (a, b) => `El resultado de la Operación combinada de (${a} x ${b}) + (${b} / ${a}) = ${ (a *b ) + (b / a) }`;
const RESULT_OPERACION = operacionCombinada(12, 15);
console.log(RESULT_OPERACION);

//8) De la siguiente frase "Como yo siempre digo, Primero muerto antes que perder la vida!" interpretarla en una funcion CALLBACK

function crearFrase(frase, callback) {
    let miFrase = "Como yo siempre digo, " + frase;
    callback(miFrase); // 2
}

function logFrase(fraseConsola) {
    console.log(fraseConsola);
}

crearFrase("Primero muerto antes que perder la vida!", logFrase);
