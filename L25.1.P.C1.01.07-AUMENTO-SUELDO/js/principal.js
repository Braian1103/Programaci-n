/*En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. La empresa necesita determinar cuánto es el total del monto adicional 
que deberá pagar en la próxima quincena. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
gana $150: */

import Cl_aumento from "./Cl_empresa.js";
import Cl_empleados from "./Cl_empleados.js";

let emp = new Cl_empleados( "obrero", 100,"juan");
let emp2 = new Cl_empleados( "obrero", 120,"ana");
let emp3 = new Cl_empleados( "administrativo", 200,"lin");
let emp4 = new Cl_empleados( "obrero", 50,"mary");
let emp5 = new Cl_empleados( "administrativo", 150,"carlos");

let aum = new Cl_aumento();

aum.procesarempleados(emp);
aum.procesarempleados(emp2);
aum.procesarempleados(emp3);    
aum.procesarempleados(emp4);
aum.procesarempleados(emp5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<p>Juan tiene un aumento de $${aum.aumentopagos()}</p>
<p>Ana tiene un aumento de $${aum.aumentopagos()}</p>
<p>Lin tiene un aumento de $${aum.aumentopagos()}</p>
<p>Mary tiene un aumento de $${aum.aumentopagos()}</p>
<p>Carlos tiene un aumento de $${aum.aumentopagos()}</p>
<p>El total de monto adicional que debe pagar la empresa es de $${aum.montototal()} </p>


`;
