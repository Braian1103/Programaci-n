/*Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es 
perder, hacer un programa que indique el porcentaje de juegos que ganaste. 
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1 
la salida requerida presenta el siguiente formato:*/

import Equipo from "./Cl_equipo.js";
import Juego from "./Cl_juegos.js";

let bar = new Equipo(1);
let bar1 = new Equipo(1);
let bar2 = new Equipo(0);
let bar3 = new Equipo(0);
let bar4 = new Equipo(1);
let bar5 = new Equipo(1);

let chan = new Juego();

chan.procesarjuegos(bar);
chan.procesarjuegos(bar1);
chan.procesarjuegos(bar2);
chan.procesarjuegos(bar3);
chan.procesarjuegos(bar4);
chan.procesarjuegos(bar5);

let salida = document.getElementById("salida");
salida.innerHTML = `<p>Ganaste el ${chan.totaljuegos()}% de los juegos</p>`;

