export default class Cl_trabajadores {
    constructor(nombre, horas_regulares, horas_extras) {
        this.nombre = nombre;
        this.horas_regulares = horas_regulares;
        this.horas_extras = horas_extras;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set horas_regulares(h) {
        this._horas_regulares = h;
    }

    get horas_regulares() {
        return this._horas_regulares;
    }

    set horas_extras(o) {    
        this._horas_extras = o;
    }

    get horas_extras() {
        return this._horas_extras;
    }

    calcular_sueldo() {
        let sueldo = this.horas_regulares * 10 
        let sueldo1 = this.horas_extras * 25;
        return sueldo + sueldo1
    }
}