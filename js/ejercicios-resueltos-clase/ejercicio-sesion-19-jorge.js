// //Objetos.

// const cliente01 = {
//     nombre: 'Marcos',
//     apellido: 'Markinson',
//     edad: 50,
//     dni: 22333444,
//     direccion: 'Rio Negro 427',
//     45: "cuarenta y cinco",
//     "hola mundo": "saludo"
// };

// const cliente02 = {
//     nombre: 'Alberto',
//     apellido: 'Zambrano',
//     edad: 20,
//     dni: 87654321,
//     direccion: 'Jr.Montero Rosas 1200'
// };

// const opinion = {};

// opinion.claudia = "no me gusta";
// opinion.jimy = "es excelente";
// opinion.richard = "me aburri";

// // console.log(cliente01['hola ' + 'mundo']);
// // console.log(cliente02.apellido);

// console.log(cliente01.edad = "texto");

// cliente02.sobrenombre = 'gato';
// console.log(cliente02.sobrenombre);

// cliente01['Le gusta'] = 'comer';
// console.log(cliente01['Le gusta']);

// console.log(opinion.richard);

/////////////////////////////////////

const alumnos = [
    {
        nombre: "Jonathan",
        apellido: "Jimenez",
        cursa: 'Programacion',
        notas: {
            primerBim: 14,
            segundoBim: 17,
            tercerBim: 16,
            cuartoBim: 11,
        },
        sobreNombre: 'Jona',
        intereses: [
            'matematicas',
            'tecnologia',
            'computacion',
            'cine',
            'cocina'
        ],
        horario: 'turno mañana'
    },
    {
        nombre: "Martha",
        apellido: "Diaz",
        cursa: 'Programacion',
        notas: {
            primerBim: 12,
            segundoBim: 16,
            tercerBim: 18,
            cuartoBim: 19,
        },
        sobreNombre: 'Marci',
        intereses: [
            'matematicas',
            'tecnologia',
            'computacion',
            'dibujo',
            'cine'
        ],
        horario: 'turno mañana'
    },
    {
        nombre: "Pamela",
        apellido: "Rios",
        cursa: 'Programacion',
        notas: {
            primerBim: 20,
            segundoBim: 10,
            tercerBim: 16,
            cuartoBim: 14,
        },
        sobreNombre: 'Pame',
        intereses: [
            'tecnologia',
            'musica',
            'dibujo',
            'cine'
        ],
        horario: 'turno mañana'
    },
    {
        nombre: "Alberto",
        apellido: "Sanchez",
        notas: {
            primerBim: 11,
            segundoBim: 14,
            tercerBim: 10,
            cuartoBim: 15,
        },
        sobreNombre: 'Albert',
        intereses: [
            'computacion',
            'musica',
            'cine'
        ],
        horario: 'turno mañana'
    },
    {
        nombre: "Monica",
        apellido: "Alejo",
        notas: {
            primerBim: 16,
            segundoBim: 17,
            tercerBim: 15,
            cuartoBim: 18
        },
        sobreNombre: 'Mona',
        intereses: [
            'computacion',
            'musica',
            'dibujo',
            'cocina',
            'cine'
        ],
        horario: 'turno mañana'
    }
]



"ejercicio-sesion-19-jorge.js";
//FORMA UNO
const PromedioAlumnos = alumnos.map( (obj) => {
    return {["nombreCompleto"]: (obj.nombre + " " + obj.apellido),
            ["promedio"]: (obj.notas.primerBim + obj.notas.segundoBim + obj.notas.tercerBim + obj.notas.cuartoBim)/4
    }} )

    PromedioAlumnos.forEach( (obj) => {
         console.log("Alumno: " + obj.nombreCompleto + " obtuvo de promedio " + obj.promedio)
     })
//FORMA DOS
//Nota de primer alumno
// let suma = 0, suma2 = 0, suma3 = 0, suma4 = 0, suma5 = 0
// //Se recorre el objeto notas desde primer bimestre al ultimo
// for (const i in alumnos[0].notas){ 
//     suma += alumnos[0].notas[i];
//  }

// //Nota de segundo alumno
// for (const i in alumnos[1].notas){ 
//     suma2 += alumnos[1].notas[i];
//  }

// //Nota de 3rcer alumno
// for (const i in alumnos[2].notas){ 
//     suma3 += alumnos[2].notas[i];
//  }

// //Nota del 4to
// for (const i in alumnos[3].notas){ 
//     suma4 += alumnos[3].notas[i];
//  }

// //Nota del 5to
// for (const i in alumnos[4].notas){ 
//     suma5 += alumnos[4].notas[i];
//  }

//  //Imprime el valor total de la suma y lo divide en 4
//  console.log( 
//  alumnos[0].nombre + ": " + suma/4 + "\n" +
//  alumnos[1].nombre + ": " + suma2/4 + "\n" +
//  alumnos[2].nombre + ": " + suma3/4 + "\n" +
//  alumnos[3].nombre + ": " + suma4/4 + "\n" +
//  alumnos[4].nombre + ": " + suma5/4  );