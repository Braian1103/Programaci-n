/*Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino 
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad 
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa. 
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’), 
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’) */

import Cl_empleados from "./Cl_empleados.js";
import Cl_empresa from "./Cl_empresa.js";

let emp1 = new Cl_empleados("Mary", "F");
let emp2 = new Cl_empleados("Jose", "M");
let emp3 = new Cl_empleados("Carlos", "M");
let emp4 = new Cl_empleados("Pedro", "M");

let emp = new Cl_empresa();

emp.procesarempleados(emp1);
emp.procesarempleados(emp2);
emp.procesarempleados(emp3);    
emp.procesarempleados(emp4);

let salida = document.getElementById("salida");
salida.innerHTML = `
<p>Cantidad de hombres que trabajan en la empresa: ${emp.cantidadhombres()}</p>
<p>Porcentaje de mujeres que trabajan en la empresa: ${emp.porcentajemujeres()}%</p>
`;
