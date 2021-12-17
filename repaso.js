/* Condicionales 
if(condicon) {
    bloque
} else if(){

} else {

}*/
/* Funcion 
Bloque de codigo reutilizable:

funcion nombre(parametros){
    return
}
nombre (argumentos);
*/
/* Secion del 10 de Diciembre de 2021 - Raul Sanchéz */

function procesadorDeFrutas(manzanas,naranjas){
    let jugo = "Jugo de " + manzanas + " manzanas y " +
    naranjas + " naranjas";
    return jugo;
} 

let jugoDeManzana = procesadorDeFrutas (4,0);
console.log(jugoDeManzana);

let jugoDeNaranja= procesadorDeFrutas (0,5);
console.log(jugoDeNaranja);