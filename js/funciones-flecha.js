let myFunction = function(parameter) {
    return parameter;
}

//Funcion Flecha o Arrow Function
const funcionFlecha = (parameter) => {
    console.log(parameter);
    return 'Hola a todos';
}

const resultado = funcionFlecha('Hola Mundo');

console.log(resultado);

//Reducir el codigo del cuerpo de la funcion en una sola linea.
const funcionSimple = () => console.log('hola a todos');
funcionSimple();

//Si la funcion va a resivir un unico parametro no es necesario usar los ()
const funcionUnParametro = parameter => console.log(parameter);
funcionUnParametro('Pasamos un argumento a la funcion flecha');

//Funcion flecha con dos o mas parametros
//Dato: Si necesitamos hacer calculos complejos o usar mas de una linea se recomienda
//hacerlo entre llaves y usar return.
const funcionSumar = (number1, number2) => number1 + number2;
console.log(funcionSumar(5, 8));

//Reducir el codigo cuando la funcion tiene una sola linea y retornar un valor
const funcionRetornaValor = () => "Esto es posible por que solo contiene una linea de codigo, no es necesario usar return";
console.log(funcionRetornaValor());

//Regresar un Objeto
const regresaObjeto = () => ({ nombre: "Jimy", apellido: "Huaraca" });
console.log(regresaObjeto());