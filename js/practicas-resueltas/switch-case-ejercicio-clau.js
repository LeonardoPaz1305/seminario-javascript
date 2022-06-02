//Ejercicio
// de acuerdo a los cupones promocionales
// "PlusOro", "Platino33", "100Max", "SuperSilver" y "TotalBronce" que descuentan respectivamente 25, 20, 15, 10 y 5 soles
// crear un programa usando switch case donde ingrese el monto, el cupon y que me muestre el precio final.


var monto = 60;
var descuento = 0;
var cupon = "SuperSilver"
var precioFinal;


cupon = cupon.toUpperCase();
switch (cupon) {
    case "PLUSORO":
        descuento = 25;
        break;
    case "PLATINO33":
        descuento = 20;
        break;
    case "100MAX":
        descuento = 15;
        break;
    case "SUPERSILVER":
        descuento = 10;
        break;
    case "TOTALBRONCE":
        descuento = 5;
        break;
    default:
       console.log("No ha introducido código promocional, o es erróneo");
}
precioFinal = monto - descuento;
console.log(`El precio final con tu descuento del cupónn ${cupon} es de S/${precioFinal}`);