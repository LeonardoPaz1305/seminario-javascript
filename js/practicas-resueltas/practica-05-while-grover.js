//Practica While - Grover

//1. Crear una funcion para encontrar el promedio de 5 notas usando el ciclo while
function sacarPromedio(...notas){
  if(notas.length > 5) throw '¡No se pueden ingresar más de 5 notas!'

  while(notas.length < notas.length + 1){
      let promedio = notas.reduce((prev,next) => prev + next) / notas.length 
      console.log(`Promedio de notas ${notas} es: ${Math.round(promedio)}`)
      break
  }
}
sacarPromedio(10,5,12,17,18)


//2. Crear una funcion para encontrar la suma de los dígitos de un número entero usando el ciclo while
//ejemplo resultado Entero: 357, la suma de sus digitos es: 15
function sumaDigitos(num){
  let strNum = String(num)
  let arrNum = strNum.split('').map(el => Number(el))

  while(arrNum.length <= arrNum.length){
    let sum = arrNum.reduce((prev,next) => prev + next)
    console.log(`Suma de Dígitos de ${num} es: ${sum}`)
    break
  }
}
sumaDigitos(123)
  
  
//4. Escriba una funcion JavaScript para calcular el máximo común divisor (MCD) de dos enteros positivos usando el ciclo while.
function maximoComunDivisor(n1,n2){
  let arr = [n1, n2]
  let mcd = [] 
  let i = 1
  
  while(i<=Math.max(...arr)){
    if(n1%i==0 && n2%i==0){
      mcd.push(i)
    }
    i++
  }
  console.log(`M.C.D. de ${n1} y ${n2} es: ${Math.max(...mcd)}`)
}
maximoComunDivisor(36,24)


//5. Escriba una funcion para encontrar todos los números pares 
// que se encuentran entre dos números ingresados usando el ciclo while.
function rangoNumPares(n1,n2){
  let numPares = []
  let i = n1
  
  while(i < n2){
    if(i % 2 == 0){
      numPares.push(i)
    }
    i++
  }
  
  while(i > n2){
    i--
    if(i % 2 == 0){
      numPares.push(i)
  	}
  }
  console.log(`Números Pares entre ${n1} y ${n2} son: ${numPares}`) 
}
rangoNumPares(18,4)


//6. Escriba una funcion para invertir un numero por ejemplo  usando el ciclo while.
function invertirNumero(num){
  let numInvertido;
  
  while(Number.isInteger(num)){
    numInvertido = String(num).split('').map(el => Number(el)).reverse().join('')
    console.log(`Número Invertido de '${num}' es: ${Number(numInvertido)}`) 
    break
  }
}
invertirNumero(67023)


//7. Escriba una funcion para mostrar los nombres de los dígitos de un número 
// por ejemplo, si el número es 231, la salida debe ser Dos Tres Uno usando el ciclo while.
// puedes apoyarte de estos objetos para convertir el entero en array 
// Array.from(String(231), Number); salida : [ 2, 3, 1 ];
let showNameNumber = function(num){
  let numArr = Array.from(String(num), Number)
  let result = []
  let i = 0
  
  if(!Number.isInteger(num)) throw 'No es un Número Entero'

  while(i<=Math.max(...numArr)){
    switch(numArr[i]){
      case 0: result.push('Cero')
        break
      case 1: result.push('Uno')
        break
      case 2: result.push('Dos')
        break
      case 3: result.push('Tres')
        break
      case 4: result.push('Cuatro')
        break
      case 5: result.push('Cinco')
        break
      case 6: result.push('Seis')
        break
      case 7: result.push('Siete')
        break
      case 8: result.push('Ocho')
        break
      case 9: result.push('Nueve')
        break
    }
    i++
  }
  console.log(`Nombres de Dígito del Número ${num} son: ${result}`)
}
showNameNumber(231)


//8. Escriba una funcion para mostrar la suma de números impares y números pares 
// por separado que se encuentran entre dos números ingresados por el usuario 
// (incluidos ambos números) usando el ciclo while.
let sumNumbersParesImpares = function(num1,num2){
  let numPares, numImpares
  let sumNumPares, sumNumImpares
  let arrNum=[]
  let i = num1
  
  while(i < num2){
    arrNum.push(i)
    numPares = arrNum.filter(el => el % 2 === 0)
    numImpares = arrNum.filter(el => el % 2 === 1)
    i++
  }

  while(i >= num2){
    arrNum.push(i)
    numPares = arrNum.filter(el => el % 2 === 0)
    numImpares = arrNum.filter(el => el % 2 === 1)
    i--
  }
   sumNumPares = numPares.reduce((prev,next) => prev+next)
   sumNumImpares = numImpares.reduce((prev,next) => prev+next)

  console.log(arrNum)
  console.log(`Suma de 'Números Pares' entre ${num1} y ${num2} es: ${sumNumPares}`) 
  console.log(`Suma de 'Números ImPares' entre ${num1} y ${num2} es: ${sumNumImpares}`) 
}
sumNumbersParesImpares(5,1)



  