/* correcion de elementos
Tiene Tienen metodos o funciones que nos pemiten ordenar o 
manipular los datos almacenados

*/

//ejemplo
const conjuntoDeLetras = ["a", "b", "c", "d"];

// manera 1
const arreglo1 = [4, "hola", true, [1, 2, 6]];
console.log(arreglo1);

// manera 2
const arreglo2 = Array.of(1, "Hola" , true);
console.log (arreglo2);

// manera 3
const arreglo3 = new Array(3, true, "Adios");
console.log (arreglo3);

const frutas = ["manzanas", "naranjas", "uvas", "sandias", [1, 2, 3, 4, 5,["A", "B", "C"]]];
//notacion de corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);
frutas[4][5].push("D");
console.log.apply(frutas);

//Metodos
/* Length = longitud de nuestro arreglo */

const letras = ["A", "B", "C", "D"]
console.log(letras.length);

/* push = añade un elemento al final de nuestro arreglo*/
letras.push("E");
console.log(letras);

/* pop = elimina el ultimo elemento */
letras.pop();
console.log(letras);

/* unshift =agrga un elemento al inicio */
letras.unshift(1);
console.log(letras);

/* shift = elimina el primer elemento */
letras.shift();
console.log(letras);