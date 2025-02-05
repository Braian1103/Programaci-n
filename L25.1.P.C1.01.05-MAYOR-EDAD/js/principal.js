/*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
reporte al final el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida 
presenta el siguiente formato:*/

import Cl_personas from "./Cl_personas.js";
import Cl_edad from "./Cl_mayor_edad.js";

let per1 = new Cl_personas("Luis", 15); 
let per2 = new Cl_personas("Ana", 19);
let per3 = new Cl_personas("Jose", 21);
let per4 = new Cl_personas("Carmen", 17);
let per5 = new Cl_personas("Rosa", 18);
let per6 = new Cl_personas("Jose", 22);
let per7 = new Cl_personas("Maria", 17);
let per8 = new Cl_personas("Luz", 19);
let per9 = new Cl_personas("Rafael", 23);
let per10 = new Cl_personas("Liz", 15);
let per11 = new Cl_personas("Marcos", 20);
let per12 = new Cl_personas("Leo", 16);

let edad = new Cl_edad();

edad.procesarpersonas(per1);
edad.procesarpersonas(per2);
edad.procesarpersonas(per3);    
edad.procesarpersonas(per4);
edad.procesarpersonas(per5);
edad.procesarpersonas(per6);
edad.procesarpersonas(per7);
edad.procesarpersonas(per8);
edad.procesarpersonas(per9);
edad.procesarpersonas(per10);
edad.procesarpersonas(per11);
edad.procesarpersonas(per12);

let salida = document.getElementById("salida");
salida.innerHTML = `
<p>Cantidad de personas: ${edad.cantidadpersonas()}</p>
<p>Cantidad de personas mayor de edad: ${edad.mayoredad()}</p>
<p>El porcentaje de personas mayores de edad es: ${edad.porcentajedad()}%</p>`
