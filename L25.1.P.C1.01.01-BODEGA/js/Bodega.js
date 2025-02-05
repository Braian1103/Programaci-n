/*En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%... 
Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos. 
Ej. Costos varios artículos: 10, 20, 14, 6 y 4 
La salida requerida presenta el siguiente formato: */

import articulo from "./articulos.js";
import ganancias from "./ganacias.js";

let art1 = new articulo(10);
let art2 = new articulo(20);
let art3 = new articulo(14);
let art4 = new articulo(6);
let art5 = new articulo(4);

let gan = new ganancias();

gan.procesararticulo(art1);
gan.procesararticulo(art2);
gan.procesararticulo(art3);
gan.procesararticulo(art4);
gan.procesararticulo(art5);

let salida = document.getElementById("salida");
salida.innerHTML = `

    <p>La ganancia será de Bs. ${gan.totalganancias()}</p>
    `