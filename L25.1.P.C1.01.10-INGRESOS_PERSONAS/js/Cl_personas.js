export default class Cl_personas {
    constructor( nombre, ingreso) {
        this.nombre = nombre;
        this.ingreso = ingreso;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set ingreso(i) {
        this._ingreso = i;
    }

    get ingreso() {
        return this._ingreso;
    }
}