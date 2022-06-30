//Objetos.

const cliente01 = {
    nombre: 'Marcos',
    apellido: 'Markinson',
    edad: 50,
    dni: 22333444,
    direccion: 'Rio Negro 427',
    45: "cuarenta y cinco",
    "hola mundo": "saludo"
};

const cliente02 = {
    nombre: 'Alberto',
    apellido: 'Zambrano',
    edad: 20,
    dni: 87654321,
    direccion: 'Jr.Montero Rosas 1200'
};

const opinion = {};

opinion.claudia = "no me gusta";
opinion.jimy = "es excelente";
opinion.richard = "me aburri";

// console.log(cliente01['hola ' + 'mundo']);
// console.log(cliente02.apellido);

console.log(cliente01.edad = "texto");

cliente02.sobrenombre = 'gato';
console.log(cliente02.sobrenombre);

cliente01['Le gusta'] = 'comer';
console.log(cliente01['Le gusta']);

console.log(opinion.richard);

/////////////////////////////////////

const alumnos = [{
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

console.log(alumnos[3].notas.segundoBim);

//solución
alumnos.forEach((estudiante, indice) => {
    estudiante = alumnos[indice];
    let nombre = estudiante.nombre;
    let apellido = estudiante.apellido;
    let notas = estudiante.notas;
    let promedio = (notas.primerBim + notas.segundoBim + notas.tercerBim + notas.cuartoBim) / 4;
    console.log(`Nombre : ${nombre} \nApellido : ${apellido}\nPromedio : ${promedio.toFixed()}`);
});