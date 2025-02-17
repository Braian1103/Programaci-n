/*Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso 
menor y el ingreso promedio. 
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150), 
(José, 135), (Carlos, 160), (Pedro, 75) */

import Cl_ingresos from "./Cl_ingresos.js";
import Cl_personas from "./Cl_personas.js";

let per1 = new Cl_personas("Mary", 150);
let per2 = new Cl_personas("Jose", 135);
let per3 = new Cl_personas("Carlos", 160);
let per4 = new Cl_personas("Pedro", 75);

let ingresos = new Cl_ingresos();

ingresos.procesarpersonas(per1);
ingresos.procesarpersonas(per2);
ingresos.procesarpersonas(per3);    
ingresos.procesarpersonas(per4);

let salida = document.getElementById("salida");
salida.innerHTML = `
<p>El ingreso menor es: ${ingresos.ingresomenor()}</p>
<p>El ingreso promedio es: ${ingresos.promedioingresos()}</p>
`;