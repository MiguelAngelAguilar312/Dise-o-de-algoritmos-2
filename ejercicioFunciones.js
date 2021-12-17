/*Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
ya sea en pantalla o en consola.
(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)*/

/*const precio =  parseInt(prompt("Ingresa el costo total de tu compra: "));
function descuentoCliente (precio){

    if ( precio >0 && precio < 100){ 
       desuentoAplicado = precio *0.1; 
    }else if (precio >= 100 && precio < 200){
        descuentoAplicaado = precio * 0.2
    }else if (precio >= 200){
        descuentoAplicaado = precio * 0.3
    }
    document.write("Costo Toal a pagar " + precio );
}*/

const precio =  parseInt(prompt("Ingresa el costo total de tu compra: "));

function descuentoCliente(precio){
    
    if (precio > 0 && precio < 100) {
        console.log ("El descuento del 10% es de: " + (precio - precio * 0.10));
    } else if (precio >= 100 && precio <= 200) {
        console.log ("El descuento del 20% es de: " + (precio - precio * 0.20));
    } else if (precio >= 200 && precio <= 200000) {
        console.log ("El descuento del 30% es de: " + (precio - precio * 0.30));
    }
    
}


descuentoCliente(precio);