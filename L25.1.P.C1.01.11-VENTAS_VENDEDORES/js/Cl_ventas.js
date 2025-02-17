export default class Cl_ventas {
    constructor() {
        this.acventas = 0;
        this.acventasmayores = 0;
        this.acventasmenores = 0;
    }

    procesarventas(m) {
        this.acventas += m.monto;

        if (m.monto > 100) {
            this.acventasmayores++;
        } if (m.monto <= 100) {
            this.acventasmenores++;
        }
    }

    mayoresventas() {
        return this.acventasmayores;
    }

    menoresventas() {
        return this.acventasmenores;
    }

    totalventas() {
        return this.acventas;
    }
}