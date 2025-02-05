export default class ganacias {
    constructor() {
        this.total = 0;
    }

    procesararticulo(p) {

    
            this.total += p.precio * 0.5;
}

    totalganancias() {
        return this.total;
    }
}