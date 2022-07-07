const alumnos = [{
        nombre: "Jonathan",
        apellido: "Jimenez",
        cursa: "Programacion",
        notas: {
            primerBim: 14,
            segundoBim: 17,
            tercerBim: 16,
            cuartoBim: 11,
        },
        sobreNombre: "Jona",
        intereses: ["matematicas", "tecnologia", "computacion", "cine", "cocina"],
        horario: "turno mañana",
    },
    {
        nombre: "Martha",
        apellido: "Diaz",
        cursa: "Programacion",
        notas: {
            primerBim: 12,
            segundoBim: 16,
            tercerBim: 18,
            cuartoBim: 19,
        },
        sobreNombre: "Marci",
        intereses: ["matematicas", "tecnologia", "computacion", "dibujo", "cine"],
        horario: "turno mañana",
    },
    {
        nombre: "Pamela",
        apellido: "Rios",
        cursa: "Programacion",
        notas: {
            primerBim: 20,
            segundoBim: 10,
            tercerBim: 16,
            cuartoBim: 14,
        },
        sobreNombre: "Pame",
        intereses: ["tecnologia", "musica", "dibujo", "cine"],
        horario: "turno mañana",
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
        sobreNombre: "Albert",
        intereses: ["computacion", "musica", "cine"],
        horario: "turno mañana",
    },
    {
        nombre: "Monica",
        apellido: "Alejo",
        notas: {
            primerBim: 16,
            segundoBim: 17,
            tercerBim: 15,
            cuartoBim: 18,
        },
        sobreNombre: "Mona",
        intereses: ["computacion", "musica", "dibujo", "cocina", "cine"],
        horario: "turno mañana",
    },
];

for (var i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i].nombre);
    var suma = 0;
    for (var element in alumnos[i].notas) {
        suma = suma + alumnos[i].notas[element];
    }
    console.log(suma);
}