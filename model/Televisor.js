const Electrodomestico = require('./Electrodomestico')
const CUARENTA_PULGADAS = 40;
const ES_TDT = 250000;
const TREINTA_POR_CIENTO = 0.3;

class Televisor extends Electrodomestico{

    constructor(nombre, consumo, procedencia, dimension, TDT){
        super(nombre, consumo, procedencia);
        this.dimension = dimension;
        this.TDT = TDT;    
    }

    calcularPrecioPorPolgadas(){
        if (this.dimension > CUARENTA_PULGADAS ){
            super.aumentarPrecioAdicional(this.getIncrementoDePrecio());
        }
    }

    // aumentarPrecioAdicional viene desde Electrodomestico
    aumentarPrecioSiEsTDT(){
        if (this.TDT == 1){
            super.aumentarPrecioAdicional(ES_TDT);
        }else if (this.TDT == 2) {
            super.aumentarPrecioAdicional(0);
        } 
    }
    getIncrementoDePrecio() {
        return super.obtenerPrecio() * TREINTA_POR_CIENTO;
    }

    calcularPrecio(){
        super.calcularPrecio()
        this.calcularPrecioPorPolgadas();
        this.aumentarPrecioSiEsTDT();
    }
}

module.exports = Televisor