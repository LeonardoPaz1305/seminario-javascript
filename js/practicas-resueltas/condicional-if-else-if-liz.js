

    let edad = 10

    if(edad <= 10 ){
      console.log(`niño`)
    }

 
else if(edad >= 10 && edad <= 18 ){
    console.log(`eres joven`)
}


else if(edad >= 19 && edad <= 50){
    console.log(`eres adulto`)
}

else if(edad >= 51 && edad <= 100){
    console.log(`eres un anciano`)
}

else{
    console.log('Valor de edad no es correcto');
}
/*
console.log('seguimos aqui');
-----------------------------------------------
- niño 1 a 12 (edad >= 1 && edad <= 12)
- Adolescente 13 a 17 (edad >= 13 && edad <= 17)
- adulto 18 a 60 (edad >= 18 && edad <= 60)
- Anciano > 60 (edad >= 61 && edad <= 120)

Ejercicio numero 2

- 0 a 3 // Aplazado
- 4 a 6 // Estudia para la proxima
- 7 a 9 // Muy bien, continua asi.
- 10 // Excelente

//Mas de 10 o numero negativo // Nota mal ingresada

*/