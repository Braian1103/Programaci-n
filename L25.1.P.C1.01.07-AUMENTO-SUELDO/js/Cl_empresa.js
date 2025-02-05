export default class Cl_aumento {
    constructor( ) {
        this.aumentosueldo = 0;
        this.totalmontobre = 0;
        this.totalmontoad = 0;
    }

    procesarempleados(p) {
       if (p.personal == "obrero") {
            this.aumentosueldo = p.monto * 0.2;
            this.totalmontobre += this.aumentosueldo;
        }
        if (p.personal == "administrativo") {
            this.aumentosueldo = p.monto * 0.1;
            this.totalmontoad += this.aumentosueldo;
            
        }
    }

    aumentopagos(){
        return this.aumentosueldo;
    }

    montototal(){
        return this.totalmontobre + this.totalmontoad;
    }
  
}