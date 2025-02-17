export default class Cl_vendedores {
    constructor(nombre,  monto) {
        this.nombre = nombre;
        this.monto = monto;
    }

    set nombre(n) {
        this._nombre = n;
    }
    get monto() {
        return this._monto
    }

    set monto(m) {
        this._monto = +m;
    }

    get monto() {
        return this._monto
    }

}