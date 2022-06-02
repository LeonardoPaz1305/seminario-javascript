/* Ejercicios Funciones */

//1) Crear una funcion donde retorne su nombre, apellidos y fecha de nacimiento, guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.

function datos (nom, ape, fecha) {
    this.nom = nom;
    this.ape = ape;
    this.fecha = fecha;
    console.log("Me llamo: " + this.nom + " mi apellido es: " + this.ape + "y mi fecha de nacimiento es: " +this.fecha+ ".");
}

datos("liz", "ortiz", "24/05/95");



//2) Cree una funcion donde pases los parametros booleano, String y number, al retornar que muestre el argumento pasado y que tipo de dato primitivo es.
const TIPO_DE_DATO = pregunta2()
console.log(pregunta2(30, 'liz', true));

function pregunta2 (booleano, String, number){
    let dato_booleano = typeof(booleano); dato_string = typeof(String); dato_number = typeof(number);
    return `primer dato es: ${dato_booleano} segundo dato es ${dato_string} y el tercer dato es ${dato_number}`;
}


//3) Cree una funcion donde se calcule el area y perimetro de un Triangulo: base = 12cm, Altura = 15cm, Lado = 16,16cm, guardar la funcion en una variable pasando los argumentos y que la respuesta sea elaborada.


function perimetroTriangulo (base, altura, lado) {
    let area = (base * altura)/2;
    let perimetro = base + lado *2
    console.log(`El area del triangulo es: ${area} y el perímetro del triangulo es: ${perimetro}`) ;
}
perimetroTriangulo(12,15,16.16);

//4) Cree una funcion donde se calcule el area de un cuadrado cuyos cuatro lados son todos iguales de longitud a=5 cm.

let cuadrado = (lado) =>{
    let area = lado ** 2;
    return area
}
console.log(cuadrado(5));

//5) Plasme en un funcion el calculo del diametro de un circulo cuyo radio es 6, guardar la funcion en una variable pasando los argumentos y que la respuesta en consola sea elaborada.



//6) La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla.

function multiply(a, b){
   
    return a * b;
}

console.log(multiply(5,5));


//7) Reducir la función en una sola linea, almacenar la funcion en una variable y luego por consola mostrar el resultado
// function operacionCombinada(a, b){
//     let resultado = (a * b) + (b / a);
//     return resultado;
// }

var operacionCombinada = (a,b) => (a * b) + (b / a);{console.log(operacionCombinada(3,10));}

//8) De la siguiente frase "Como yo siempre digo, Primero muerto antes que perder la vida!" interpretarla en una funcion CALLBACK

function frase(f1,f2){
    let f1 = "Como yo siempre digo,"; f2 = "Primero muerto antes que perder la vida!";
}

function imprimir(mensaje){
    console.log(`${mensaje}`);
}

frase("hola")

