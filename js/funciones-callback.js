// Funcion Callback

function comprar(producto1, producto2, total) {
    let gastos = producto1 + producto2;
    total(gastos);
}

function imprimir(mensaje) {
    console.log(`Compramos leche y pan - gastamos: S/.${mensaje}`);
}

comprar(3.5, 6.5, imprimir);