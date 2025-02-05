export default class Cl_edad {
    constructor() {
        this.acedad = 0;
        this.acpersonas = 0;
    }

    procesarpersonas(e) {
        this.acedad += e.edad;
        this.acpersonas++;
    }

    promedioedad() {
        return this.acedad / this.acpersonas;
    }
}