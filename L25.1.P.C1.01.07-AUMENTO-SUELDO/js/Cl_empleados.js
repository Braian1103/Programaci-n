export default class Cl_empleados {
    constructor(personal, monto, nombre) {
        this.personal = personal;
        this.monto = monto;
        this.nombre = nombre;
    }

    set personal(p) {
        this._personal = p;
    }

    get personal() {
        return this._personal;
    }

    aumentopagos(){
         if (this.personal == "obrero") {
          return  this.monto * 0.2;
        } 
        if (this.personal == "administrativo") {
           return this.monto * 0.1;
        }
    }
}