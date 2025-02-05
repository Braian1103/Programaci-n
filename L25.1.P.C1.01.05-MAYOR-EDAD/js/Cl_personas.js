export default class Cl_personas {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }
}