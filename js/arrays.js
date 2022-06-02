//              String
// cadena  H o l a - M u n d o
// indice  0 1 2 3 4 5 6 7 8 9
// largo   1 2 3 4 5 6 7 8 9 10


// Array  |     Kevin    |    Jimy     |     null    |     Richard    |    Liz     |    true     |     Claudia    |     10    |     Leo    |
//------------------------------------------------------------------------------------------------------------------------------------------
// indice |       0      |      1      |       2     |        3       |     4      |      5      |        6       |      7    |      8     |
//------------------------------------------------------------------------------------------------------------------------------------------
// largo  |       1      |      2      |       3     |        4       |     5      |      6      |        7       |      8    |      9     |

let cadena = 'Hola';

let cadena2 = new String('Hola Amigos');

let myArray = [1, 2, true, null, 'hola', 8.56];

let myArray2 = new Array(1, 2, true, null, 'hola', 8.56);

console.log(myArray);
console.log(myArray2);

console.log(myArray[3]);
console.log(myArray2[6]);

let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
diasSemana[1] = 'sabado';
diasSemana[diasSemana.length] = 'domingo';
console.log(diasSemana);

console.log(diasSemana[diasSemana.length - 1]);

diasSemana[0] = 'lorem';
console.log(diasSemana);

let otroArray = [1, 2, 3]
let animales = ['gato', 'liebre', 'puma', 'loro', otroArray];
let nuevaColeccion = [1, true, 'Hola Mundo', animales, 'perro', 3, undefined];

console.log(nuevaColeccion);

//                                                                  Array - nuevaColeccion
//------------------------------------------------------------------------------------------------------------------------------------
// length   |     1    |      2     |       3      |                      4                    |      5     |     6    |      7      |
//------------------------------------------------------------------------------------------------------------------------------------
// indice   |     0    |      1     |       2      |                      3                    |      4     |     5    |      6      |
//------------------------------------------------------------------------------------------------------------------------------------
// objetos  |     1    |    true    |  Hola Mundo  |                   animales                |    gato    |     3    |  undefined  |
//------------------------------------------------------------------------------------------------------------------------------------
//                                                 |  gato  |   liebre   |   gato   |  loro  |
//------------------------------------------------------------------------------------------------------------------------------------
//                                          indice |    0   |      1     |     2    |    3   |

console.log(nuevaColeccion[3][4][1]);