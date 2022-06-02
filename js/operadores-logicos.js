/*
&& AND (y)
-------------------------
true && true = true
false && true = false
true && false = false
false && false = false
-------------------------
|| OR (o)
-------------------------
true || true = true
false || true = true
true || false = true
false || false = false
-------------------------
! NOT (invertir o negar)
*/

let elemento = !(true && !true); // true AND false = false => true
console.log(elemento);

let password = 'Hola@Mundo';

if (password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf('@') === -1) {
    console.log('El password es correcto');
} else {
    console.log('Password no valido necesita tener al menos 8 caracteres, no debe tener @ ni tampoco espacios');
}