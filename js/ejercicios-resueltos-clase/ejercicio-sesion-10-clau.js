let edad = 150

if(edad >= 1 && edad <= 12){
console.log('Eres menor de edad')
}
else if(edad >= 13 && edad <= 17){
  console.log('Eres un joven')
}
else if(edad >= 18 && edad <= 60){
  console.log('Eres un adulto')
}
else if(edad >= 61 && edad <= 120){
  console.log('Eres un anciano')
}
else{
    console.log('Valor de edad no es correcto');
}


/* -----------------------------------------------
- niño 1 a 12 (edad >= 1 && edad <= 12)
- Adolescente 13 a 17 (edad >= 13 && edad <= 17)
- adulto 18 a 60 (edad >= 18 && edad <= 60)
- Anciano > 60 (edad >= 61 && edad <= 120)
-----------------------------------------------------

Ejercicio numero 2

- 0 a 3 // Aplazado
- 4 a 6 // Estudia para la proxima
- 7 a 9 // Muy bien, continua asi.
- 10 // Excelente

//Mas de 10 o numero negativo // Nota mal ingresada

*/
let nota = 21

if(nota >= 0 && nota <= 3){
  console.log('Su examen fue aplazado')
}
else if(nota >= 4 && nota <= 6){
  console.log('Estudia para la proxima')
}
else if(nota >= 7 && nota <= 9){
  console.log('Muy bien, continua asi.')
}
else if(nota == 10){
  console.log('Su nota es excelente')
}
else if(nota > 10 || nota < 0 ){
  console.log('Nota mal ingresada')
}
