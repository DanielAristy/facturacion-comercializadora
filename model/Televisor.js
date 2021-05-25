const CUARENTA_PULGADAS = 40;

class Televisor{

    constructor(dimension, TDT){
        this.dimension = dimension;
        this.TDT = TDT;    
    }

    calcularPrecioPorPolgadas(){
        if (this.dimension > CUARENTA_PULGADAS ){
            aumentarPrecioAdicional(getIncrementoDePrecio());
        }
    }

    // aumentarPrecioAdicional viene desde Electrodomestico
    aumentarPrecioSiEsTDT(){
        if (this.TDT == 1){
            aumentarPrecioAdicional(ES_TDT);
        }else {
            aumentarPrecioAdicional(0);
        }
    }
}

module.exports = Televisor