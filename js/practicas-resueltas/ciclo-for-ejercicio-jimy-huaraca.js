/*
sintaxis

for (0, menor a 10, suma 2){
    // lo que necesito que se repita
}
sigue aquí
*/

for (let i = 1; i < 10; i++) {
    console.log('hola mundo ' + i);
}

const misAlumnos = [{
        nombre: "Juan",
        apellido: "Perez",
        nota: 10
    },
    {
        nombre: "Pedro",
        apellido: "Montes",
        nota: 8
    },
    {
        nombre: "Kevin",
        apellido: "Perez",
        nota: 8
    }
];

let cadena = 'Cadena a recorre';

let total = 0;
for (let i = 0; i < misAlumnos.length; i++) {
    let estudiante = misAlumnos[i];
    total += estudiante.nota
    console.log(`${estudiante.nombre} ${estudiante.apellido}`);
}
console.log(total / misAlumnos.length);

for (let index = 0; index < cadena.length; index++) {
    const element = cadena[index];
    console.log(element);
}