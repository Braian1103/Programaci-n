/* Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas 
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a 
10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere el nombre y 
salario obtenido de cada trabajador; además se requiere el monto total de nómina pagada. 
Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas 
regular, números de horas extra) (Mary, 30, 10), (José, 35,5), (Carlos, 35,0), (Pedro, 25, 10)  */

import Cl_trabajadores from "./Cl_trabajadores.js";
import Cl_nomina from "./Cl_nomina.js";

let trab1 = new Cl_trabajadores("Mary", 30, 10);
let trab2 = new Cl_trabajadores("Jose", 35, 5);
let trab3 = new Cl_trabajadores("Carlos", 35, 0);
let trab4 = new Cl_trabajadores("Pedro", 25, 10);

let nom = new Cl_nomina();

nom.procesarempleados(trab1);
nom.procesarempleados(trab2);
nom.procesarempleados(trab3);
nom.procesarempleados(trab4);

let salida = document.getElementById("salida");
salida.innerHTML = `
<p>el trabajador ${trab1.nombre} tiene un salario de : ${trab1.calcular_sueldo()}</p>
<p>el trabajador ${trab2.nombre} tiene un salario de : ${trab2.calcular_sueldo()}</p>
<p>el trabajador ${trab3.nombre} tiene un salario de : ${trab3.calcular_sueldo()}</p>
<p>el trabajador ${trab4.nombre} tiene un salario de : ${trab4.calcular_sueldo()}</p>
<p>El total de la nomina es de : ${nom.montototal()}</p>
`;  
