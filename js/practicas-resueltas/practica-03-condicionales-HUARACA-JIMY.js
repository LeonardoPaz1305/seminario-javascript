/*1)
Escribir un programa donde ingrese una edad y 
muestre por consola si es mayor de edad o no 
teniendo en cuenta que la mayoria de edad es 18.
*/

let edad = 20;

if (edad < 18) {
    console.log("usted es menor de edad");
} else if (edad >= 18) {
    console.log("usted es mayor de edad");
} else {
    console.log("ingrese una edad correcta");
}

/*2)
Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
En otra variable donde ingreses la contraseña e imprima por consola si la contraseña introducida 
coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.
*/

let key = "H4araca";
let password = "H4araca9";

if (key === password.toLowerCase()) {
    console.log("Las contrasenas coinciden");
} else {
    console.log("Las contrasenas no coinciden");
}

/*3)
Escribir un programa donde pases dos números y devuelva su división. 
debe devolver un aviso de error si el divisor es cero.
*/

let num1 = 20;
let divisor = 5;

if (divisor == 0) {
    console.log("¡Error!, No se puede dividir entre 0");
} else {
    console.log(`La division de ${num1} y ${divisor} es ${num1/divisor}`);
}

/*4)
Escribir un programa donde ingreses un número entero y 
muestre por consola si es par o impar.
*/

let num = 5;

if (num % 2 == 0) {
    console.log(`el numero ${num} es par`);
} else {
    console.log(`el numero ${num} no es par`);
}

/*5)
Para tributar un determinado impuesto se debe ser mayor de 17 años 
y tener unos ingresos iguales o superiores a S/.930 mensuales. 
Escribir un programa donde se ingrese la edad y sus ingresos mensuales 
y muestre por consola si el usuario tiene que tributar o no.
*/

let anioEdad = 18;
let ingreso = 900;

if (anioEdad >= 18 && ingreso >= 930) {
    console.log(`usted tiene ${anioEdad} años y tiene un ingreso de ${ingreso} mensual lo cual lo hace apto para tributar`);
} else
if (anioEdad >= 18 && ingreso < 930) {
    console.log(`usted tiene ${anioEdad} años pero no cuenta con el ingreso suficiente para tributar`);
} else {
    console.log(`usted tiene ${anioEdad} años lo cual no lo hace apto para tributar`);
}


/*6) 
Los alumnos de un curso se han dividido en dos grupos A y B 
de acuerdo al sexo(M o F) y el nombre. El grupo A esta formado 
por las mujeres con un nombre anterior a la M y 
los hombres con un nombre posterior a la N y el grupo B por el resto. 
Escribir un programa donde ingrese un nombre y sexo, 
y muestre por consola el grupo que le corresponde.
*/

let grupo = "";
let sexo = "M";
let nombre = "Jimy";

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

console.log(`Tu grupo asignado es ${grupo}`);


/////////////////////////////////////////////////////////////////////////
/*7)
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

let sueldo = 1900;
let anios = 3;
let evaluacion = 9;
let aumento = 0;
let bonificacion = 0;

if (anios > 2) {
    bonificacion = sueldo * 0.03;
    console.log('usted recibe una bonificacion de 3%');
} else {
    console.log('usted no recibe bonificacion');
}
if (sueldo < 2000 && anios > 1) {
    aumento = sueldo * 0.25;
    console.log('usted recibe un 25% de aumento');
}
if (evaluacion > 8.7) {
    aumento = sueldo * 0.5;
    console.log('usted recibe un 5% extra de aumento');
} else
if (evaluacion < 6) {
    aumento = sueldo * 0;
    bonificacion = sueldo * 0;
    console.log('usted no recibe un extra de aumento');
}

total = sueldo + aumento + bonificacion;

console.log(`Usted recibe un sueldo de ${sueldo} + un aumento de ${aumento} + una bonificacion de ${bonificacion} que hace un total de ${total}`)

/*8)
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

let renta = 20000;

if (renta < 10000) {
    console.log('pertenece al tipo 5%');
} else
if (renta >= 10000 && renta <= 20000) {
    console.log('pertenece al tipo 15%');
} else
if (renta >= 20000 && renta <= 35000) {
    console.log('pertenece al tipo 20%');
} else
if (renta >= 35000 && renta <= 60000) {
    console.log('pertenece al tipo 30%');
} else
if (renta > 60000) {
    console.log('pertenece al tipo 45%');
} else {
    console.log('Dato erroneo');
}

/*9)
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

let puntuacion = 0.4;
let nivel = "";

if (puntuacion == 0.0) {
    nivel = "Inaceptable";
} else
if (puntuacion == 0.4) {
    nivel = "Aceptable"
} else
if (puntuacion >= 0.6) {
    nivel = "Meritorio";
} else {
    console.log("Puntuacion erronea")
}

dinero = puntuacion * 2400;

console.log(`El puntaje de ${puntuacion} con nivel ${nivel} recibe un dinero de ${dinero}`)


/*10)
Escribir un programa para una empresa que tiene salas de juegos para todas las edades 
y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar.
El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada.
Si el cliente es menor de 4 años puede entrar gratis, 
si tiene entre 4 y 18 años debe pagar S/5 y si es mayor de 18 años, S/10.
*/

let edadCliente = 20;

if (edadCliente < 4) {
    console.log(`Usted tiene ${edadCliente} años y tiene ingreso gratis`);
} else
if (edadCliente <= 18) {
    console.log(`Usted tiene ${edadCliente} años y tiene que pagar S/ 5 soles de entrada`);
} else
if (edadCliente > 18) {
    console.log(`Usted tiene ${edadCliente} años y tiene que pagar S/ 10 soles de entrada`);
}

/*11)
La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. 
Los ingredientes para cada tipo de pizza aparecen a continuación.

Ingredientes vegetarianos: Pimiento y tofu.
Ingredientes no vegetarianos: Peperoni, Jamón y Salmón.

Escribir un programa donde ingreses si quiere una pizza vegetariana o no, 
y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija. 
Solo se puede eligir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas.
Al final se debe mostrar por consola si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.
*/


let tipo = 2;
let ingrediente = 3;
let ingredienteExtra = null;

console.log("Eliga el tipo de pizza:\n\t1.Vegetariana\n\t2.No vegetariana");
if (tipo === 1) {
    console.log("Usted requiere una pizza vegetariana");
    console.log("Ingredientes:\n\t1.Pimiento\n\t2.Tofu");
    console.log("Seleccione el ingrediente extra a agregar:");
    if (ingrediente == "1") {
        ingredienteExtra = "Pimiento";
        console.log(`Su pizza tendria: mozzarella - tomate y ${ingredienteExtra}`);
    } else
    if (ingrediente == "2") {
        ingredienteExtra = "Tofu";
        console.log(`Su pizza tendria: mozzarella - tomate y ${ingredienteExtra}`);
    }
} else
if (tipo === 2) {
    console.log("Usted requiere una pizza no vegetariana");
    console.log("Ingredientes:\n\t1.Peperoni\n\t2.Jamón\n\t3.Salmon");
    console.log("Seleccione el ingrediente extra a agregar:");
    if (ingrediente == "1") {
        ingredienteExtra = "Peperoni";
        console.log(`Su pizza tendria: mozzarella - tomate y ${ingredienteExtra}`);
    } else
    if (ingrediente == "2") {
        ingredienteExtra = "Jamón";
        console.log(`Su pizza tendria: mozzarella - tomate y ${ingredienteExtra}`);
    } else
    if (ingrediente == "3") {
        ingredienteExtra = "Salmon";
        console.log(`Su pizza tendria: mozzarella - tomate y ${ingredienteExtra}`);
    }
}