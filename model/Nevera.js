const Electrodomestico = require("./Electrodomestico");
const CIENTO_VEINTE_LITROS = 120;
const PORCENTAJE_CINCO_PORCIENTO = 0.05;
const LITROS_ADICIONALES = 10;

class Nevera extends Electrodomestico{

    constructor(nombre, consumo, procedencia, capacidad){
        super(nombre, consumo, procedencia);
        this.capacidad = capacidad;
    }

    calcularPrecioPorLitros(){
        if (this.capacidad >= CIENTO_VEINTE_LITROS){
            super.aumentarPrecioAdicional(this.getCantidad());
        }else {
            super.aumentarPrecioAdicional(0);
        }
    }
    calcularPrecio(){
        super.calcularPrecio()
        this.calcularPrecioPorLitros();
    }

    getCantidad() {
        return this.getPorcentajePorCadaLitro() * super.obtenerPrecio();
    }

    getPorcentajePorCadaLitro() {
        return this.getCantidadDeLitros() * PORCENTAJE_CINCO_PORCIENTO;
    }

    getCantidadDeLitros() {
        return Math.floor(this.getLitrosDeMas() / LITROS_ADICIONALES);
    }

    getLitrosDeMas() {
        return this.capacidad - CIENTO_VEINTE_LITROS;
    }
}

module.exports = Nevera