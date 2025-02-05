export default class Juego {
    constructor() {
        this.acpartidos = 0;
        this.acjuegos= 0;
        this.partidos = 0;
    }

    procesarjuegos(r) {

        this.partidos += r.partidos;
        this.acpartidos++;


        if (r.resultado == 1) {
            this.acjuegos += r.resultado;
        }
    }

    totaljuegos() {
        return  (this.acjuegos / this.acpartidos) * 100;
    }
}
 

