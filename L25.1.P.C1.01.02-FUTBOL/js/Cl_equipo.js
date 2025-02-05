export default class Equipo { 
    constructor(resultado) {
    this.resultado = resultado;
   }

   set resultado(r) {
    this._resultado = +r;
   }

   get resultado() {
    return this._resultado;
   }

}