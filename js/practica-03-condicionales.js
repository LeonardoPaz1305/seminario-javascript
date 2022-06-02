/*1)
Escribir un programa donde ingrese una edad y 
muestre por consola si es mayor de edad o no 
teniendo en cuenta que la mayoria de edad es 18.
*/

// let edad = 10;

// if (edad <= 17) {
//     console.log("Eres menor de edad");
// } else {
//     console.log("Eres mayor de edad");
// }

/*2)
Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
En otra variable donde ingreses la contraseña e imprima por consola si la contraseña introducida 
coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.
*/

let key = "c0ntr4señ4";
let password = "C0nTr4SeÑ4";

if (key === password.toLowerCase()) {
    console.log("La contraseña coincide");
} else {
    console.log("La contraseña no coincide");
}

/*3)
Escribir un programa donde pases dos números y devuelva su división. 
debe devolver un aviso de error si el divisor es cero.
*/

let dividendo, divisor;

dividendo = 20;
divisor = 2;

if (divisor === 0) {
    console.log("¡Error! No se puede dividir por 0.");
} else {
    console.log(`la division entre ${dividendo} y ${divisor} es igual a ${dividendo / divisor}`);
}

/*4)
Escribir un programa donde ingreses un número entero y 
muestre por consola si es par o impar.
*/

let numero = 15;

if (numero % 2 == 0) {
    console.log(`El número ${numero} es par`);
} else {
    console.log(`El número ${numero} es impar`);
}

/*5)
Para tributar un determinado impuesto se debe ser mayor de 17 años 
y tener unos ingresos iguales o superiores a S/.930 mensuales. 
Escribir un programa donde se ingrese la edad y sus ingresos mensuales 
y muestre por consola si el usuario tiene que tributar o no.
*/

let edad = 18;
let ingresos = 1000;

if (edad >= 18 && ingresos >= 930) {
    console.log("Tienes que tributar");
} else {
    console.log("No tienes que tributar");
}

/*6) 
Los alumnos de un curso se han dividido en dos grupos A y B 
de acuerdo al sexo(M o F) y el nombre. El grupo A esta formado 
por las mujeres con un nombre anterior a la M y 
los hombres con un nombre posterior a la N y el grupo B por el resto. 
Escribir un programa donde ingrese un nombre y sexo, 
y muestre por consola el grupo que le corresponde.
*/

let nombre = 'Claudia';
let sexo = 'F'
let grupo = null;

if (sexo === 'M') {
    if (nombre.toLowerCase() > "n") {
        grupo = "A";
    } else {
        grupo = "B";
    }
} else {
    if (nombre.toLowerCase() < "m") {
        grupo = "A";
    } else {
        grupo = "B";
    }
}
console.log(`Tu grupo es ${grupo}`);

/////////////////////////////////////////////////////////////////////////
/*7) -- Claudia
Realice un programa que dado como dato el sueldo de un trabajador,
la cantidad de años laborados y la calificacion de la evaluacion de
desempeño, calcule el aumento que puede recibir segun los siguientes
criterios.

-Todos los trabajadores con más de 2 años de laborar reciben una bonificacion
 de un 3% (0.03)

-Todos los trabajadores que tengan menos de S/.2000 de sueldo y tengan más de
 un año de laborar en la empresa reciben 25% (0.25) de aumento

-Aquellos empleados que tengan más de un 8.7 en su evaluación de desempeño
 reciben ademas un 5% (0.05) extra de aumento (calculado sobre el sueldo inicial)

-Aquellos empleados que tengan menos de 6 puntos en su evaluación de desempeño
 no deben recibir ninguno de los aumentos anteriores

*/

let calcularAumento = (sueldo, aniosLaborados, calificacion) => {

    let nSueldo,
        nAnios,
        nCalificacion,
        nAumento,
        nSueldoFinal;

    nSueldo = sueldo;
    nAnios = aniosLaborados;
    nCalificacion = calificacion;
    nAumento = 0;
    nSueldoFinal = 0;

    if (nAnios > 2) {
        nAumento = (nSueldo * 0.03);
    } else {
        nAumento += 0;
    }

    if (nSueldo < 2000 && nAnios > 1) {
        nAumento += (nSueldo * 0.25);
    } else {
        nAumento += 0;
    }

    if (nCalificacion > 8.7) {
        nAumento += (nSueldo * 0.05);
    } else {
        nAumento += 0;
    }

    if (nCalificacion < 6) {
        nAumento = 0;
    }

    nSueldoFinal = nSueldo + nAumento;

    console.log(`El aumento es de ${nAumento}`);
    console.log(`El sueldo con el aumento es igual a ${nSueldoFinal}`);

}

calcularAumento(1000, 3, 6);

/*8) -- Richard
Los tramos impositivos para la declaración de la renta 
en un determinado país son los siguientes:

Renta	                    Tipo impositivo
Menos de S/10000	        5%
Entre S/10000 y S/20000	    15%
Entre S/20000 y S/35000	    20%
Entre S/35000 y S/60000	    30%
Más de S/60000	            45%

Escribir un programa donde ingrese su renta anual 
y muestre por pantalla el tipo impositivo que le corresponde.
*/

let declaracionRenta = (renta) => {

    let tipo = null;

    if (renta < 10000) {
        tipo = 5
    } else if (renta < 20000) {
        tipo = 15
    } else if (renta < 35000) {
        tipo = 20
    } else if (renta < 60000) {
        tipo = 30
    } else {
        tipo = 45
    }

    console.log(`Tienes que pagar S/.${(renta * tipo) / 100}`);
}

declaracionRenta(10000);

/*9) -- Kevin
En una determinada empresa, sus empleados son evaluados al final de cada año. 
Los puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando, 
traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados 
pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas. 
A continuación se muestra una tabla con los niveles correspondientes a cada puntuación. 
La cantidad de dinero conseguida en cada nivel es de S/2.400 multiplicada por la puntuación del nivel.

Nivel	        Puntuación
Inaceptable	    0.0
Aceptable	    0.4
Meritorio	    0.6 o más

Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento, 
así como la cantidad de dinero que recibirá el usuario.
*/
let evaluacionDesempenio = (puntos) => {

    let bonificacion,
        inaceptable,
        aceptable,
        meritorio;

    bonificacion = 2400
    inaceptable = 0
    aceptable = 0.4
    meritorio = 0.6

    if (puntos == inaceptable) {
        nivel = "Inaceptable";
    } else if (puntos == aceptable) {
        nivel = "Aceptable";
    } else if (puntos >= 0.6) {
        nivel = "Meritorio";
    } else {
        nivel = "";
    }

    if (nivel == "") {
        console.log("Esta puntuación no es válida")
    } else {
        console.log(`Tu nivel de rendimiento es ${nivel}`);
        console.log(`Te corresponde cobrar ${puntos * bonificacion}`);
    }
}

evaluacionDesempenio(5);

/*10) -- Jimy
Escribir un programa para una empresa que tiene salas de juegos para todas las edades 
y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar.
El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada.
Si el cliente es menor de 4 años puede entrar gratis, 
si tiene entre 4 y 18 años debe pagar S/5 y si es mayor de 18 años, S/10.
*/

let salaJuegos = (edad) => {
    if (edad < 4) {
        precio = 0;
    } else if (edad <= 18) {
        precio = 4;
    } else {
        precio = 10;
    }

    console.log(`El precio de la entrada es S/${precio}`);
}

salaJuegos(32);

/*11) -- Liz
La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. 
Los ingredientes para cada tipo de pizza aparecen a continuación.

Ingredientes vegetarianos: Pimiento y tofu.
Ingredientes no vegetarianos: Peperoni, Jamón y Salmón.

Escribir un programa donde ingreses si quiere una pizza vegetariana o no, 
y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija. 
Solo se puede eligir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas.
Al final se debe mostrar por consola si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.
*/

console.log(`Bienvenido a la pizzeria Bella Napoli.\nTipos de pizza\n\t1- Vegetariana\n\t2- No vegetariana\n`);

let tipo, ingrediente;
tipo = 2;
ingrediente = 2;

if (tipo === 1) {
    console.log(`Ingredientes de pizzas vegetarianas\n\t 1- Pimiento\n\t2- Tofu\n`);
    console.log(("Introduce el ingrediente que deseas: "));
    let ingredienteExtra = "";
    if (ingrediente == "1") {
        ingredienteExtra = "pimiento";
        console.log(`Pizza vegetariana con mozzarella, tomate y ${ingredienteExtra}`);
    } else if (ingrediente == "2") {
        ingredienteExtra = "tofu";
        console.log(`Pizza vegetariana con mozzarella, tomate y ${ingredienteExtra}`);
    }

} else if (tipo === 2) {
    console.log(`Ingredientes de pizzas no vegetarianas\n\t1- Peperoni\n\t2- Jamón\n\t3- Salmón\n`);
    console.log(("Introduce el ingrediente que deseas: "));
    let ingredienteExtra = "";
    if (ingrediente == "1") {
        ingredienteExtra = "peperoni";
        console.log(`Pizza vegetariana con mozzarella, tomate y ${ingredienteExtra}`);
    } else if (ingrediente == "2") {
        ingredienteExtra = "jamón";
        console.log(`Pizza vegetariana con mozzarella, tomate y ${ingredienteExtra}`);
    } else {
        ingredienteExtra = "salmón";
        console.log(`Pizza vegetariana con mozzarella, tomate y ${ingredienteExtra}`);
    }
}