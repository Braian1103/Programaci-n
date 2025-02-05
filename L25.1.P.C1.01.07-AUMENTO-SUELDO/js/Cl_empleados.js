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
}