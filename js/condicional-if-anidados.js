//if anidados

let password = 'Hola-Mundo';
console.log(password.indexOf(' '));

if (password.length >= 8) {
    console.log('Primer if superado, tiene 8 caracteres');

    if (password.indexOf(' ') === -1) {
        console.log('Segundo if (anidado), la cadena no tiene espacios');

        if (password.indexOf('@') === -1) {
            console.log('Tercer if (anidado), no tiene @');
        } else {
            console.log('Password no valido, contiene @');
        }

    } else {
        console.log('Password no valido, contiene espacios y no es permitido');
    }

} else {
    console.log('El password necesita tener al menos 8 caracteres');
}