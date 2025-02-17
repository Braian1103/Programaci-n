export default class Cl_nomina {
    constructor() {
        this.pagototal = 0;
        this.achoras = 0;
        this.achorasextras = 0;
    }

    procesarempleados(n) {
        this.achoras += n.horas_regulares * 10;
        this.achorasextras += n.horas_extras * 25;

        this.pagototal = this.achoras + this.achorasextras;
    }

    montototal() {
        return this.pagototal;
    }
}