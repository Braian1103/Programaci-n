export default class articulo {
    constructor( precio ) {
        this.precio = precio;
    }

    set precio(p) {
        this._precio = +p;
    }

    get precio() {
        return this._precio;
    }
}