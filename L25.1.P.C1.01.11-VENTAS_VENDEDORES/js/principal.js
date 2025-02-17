/*Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas 
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el 
monto total en $ de todas las ventas. 
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta) 
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75) */

import Cl_ventas from "./Cl_ventas.js";
import Cl_vendedores from "./Cl_vendedores.js";

let ven1 = new Cl_vendedores("Mary", 150);
let ven2 = new Cl_vendedores("Jose", 135);
let ven3 = new Cl_vendedores("Carlos", 160);    
let ven4 = new Cl_vendedores("Pedro", 75);

let ventas = new Cl_ventas();

ventas.procesarventas(ven1);
ventas.procesarventas(ven2);
ventas.procesarventas(ven3);    
ventas.procesarventas(ven4);

let salida = document.getElementById("salida"); 
salida.innerHTML = `
<p>Cantidad de ventas que fueron por 100$ o menos es: $${ventas.menoresventas()}</p>
<p>Cantidad de ventas mayores a 100$ es: $${ventas.mayoresventas()}</p>
<p>El monto total de las ventas es: $${ventas.totalventas()}</p>`;
