export default class Cl_edad {
    constructor( ) {
        this.acpersonas = 0;
        this.acmayoredad = 0;
        
    }

    procesarpersonas(n) {
        this.acpersonas++;

        if (n.edad >= 18) {
            this.acmayoredad++;
        }
    }

    cantidadpersonas() {
        return this.acpersonas;
    }

    mayoredad() {
        return this.acmayoredad;
    }

    porcentajedad() {
        return (this.acmayoredad / this.acpersonas) * 100;
    }

}