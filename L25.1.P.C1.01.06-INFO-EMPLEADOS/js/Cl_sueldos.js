export default class Cl_sueldos {
    constructor() {
        this.pagobreros = 0;
        this.pagoadminis0 = 0;   
    }

    procesarempleados(p) {
        if (p.personal == "obrero") {
            this.pagobreros += p.monto;
    }
        if (p.personal == "administrativo") {
            this.pagoadminis0 += p.monto;
    }
  }

    totalpagosobreros() {
        return this.pagobreros;
    }

    porcentajeobreros() {
        return this.pagobreros / 3;
    }

    totalpagoadministrativos() {
        return this.pagoadminis0;
    }

    porcentajeadministrativos() {
        return this.pagoadminis0 / 2;
    }
}
    