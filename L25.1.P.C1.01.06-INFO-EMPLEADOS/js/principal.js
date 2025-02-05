/*En una empresa se tiene personal obrero y personal administrativo. La empresa necesita 
determinar cuál es el monto promedio que paga por cada tipo de personal. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana 
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo) 
gana $150: */

import Cl_empresa from "./Cl_empresa.js";
import Cl_sueldos from "./Cl_sueldos.js";

let emp = new Cl_empresa( "obrero", 100,"juan");
let emp2 = new Cl_empresa( "obrero", 120,"ana");
let emp3 = new Cl_empresa( "administrativo", 200,"lin");
let emp4 = new Cl_empresa( "obrero", 50,"mary");
let emp5 = new Cl_empresa( "administrativo", 150,"carlos");

let suel = new Cl_sueldos();

suel.procesarempleados(emp);
suel.procesarempleados(emp2);
suel.procesarempleados(emp3);    
suel.procesarempleados(emp4);
suel.procesarempleados(emp5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<p>Monto total pagado a obreros:$ ${suel.totalpagosobreros()}</p>
<p>Promedio pagado a 3 obreros: $ ${suel.porcentajeobreros()}</p>

<p>Monto total pagado a administrativos: $ ${suel.totalpagoadministrativos()}</p>
<p>Promedio pagado a 2 administrativos: $ ${suel.porcentajeadministrativos()}</p>
`
