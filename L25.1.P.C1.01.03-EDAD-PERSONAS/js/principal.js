/*Conociendo la edad de varias personas, indicar la edad promedio. 
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18 
La salida requerida presenta el siguiente formato: */

import Cl_persona from "./Cl_persona.js";
import Cl_edad from "./Cl_edad.js";

let per1 = new Cl_persona(15);
let per2 = new Cl_persona(14);
let per3 = new Cl_persona(19);
let per4 = new Cl_persona(20);
let per5 = new Cl_persona(16);
let per6 = new Cl_persona(18);

let edad = new Cl_edad();

edad.procesarpersonas(per1);
edad.procesarpersonas(per2);
edad.procesarpersonas(per3);    
edad.procesarpersonas(per4);
edad.procesarpersonas(per5);
edad.procesarpersonas(per6);

let salida = document.getElementById("salida");
salida.innerHTML = `<p>La edad promedio es: ${edad.promedioedad()}</p>`