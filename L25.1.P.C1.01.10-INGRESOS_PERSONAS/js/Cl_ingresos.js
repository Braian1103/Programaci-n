export default class Cl_ingresos {
    constructor (){
        this.acingrsos = 0;
        this.acpersonas = 0;
        this.menoringreso = 0;
    }

    procesarpersonas(i){
        this.acingrsos += i.ingreso;
        this.acpersonas++;

        this.menoringreso = i.ingreso

        if (i.ingreso > this.menoringreso) {
            this.menoringreso = i.ingreso;
        }
    }

    ingresomenor() {
        return this.menoringreso;
    }

    promedioingresos() {
        return this.acingrsos / this.acpersonas;
    }
}