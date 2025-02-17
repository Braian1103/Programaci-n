export default class Cl_empresa {
    constructor() {
        this.achicas = 0;
        this.achombres = 0;
        this.acperonaal = 0;
    }


    procesarempleados(n) {

        this.acperonaal++;

        if (n.sexo == "F") {
            this.achicas++;
        }
        if (n.sexo == "M") {
            this.achombres++;
        }
     
    }

    cantidadhombres() {
        return this.achombres;
    }

    porcentajemujeres() {
        return (this.achicas / this.acperonaal) * 100;
    }

}