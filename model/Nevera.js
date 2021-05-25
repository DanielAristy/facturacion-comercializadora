const CIENTO_VEINTE_LITROS = 120;
const PORCENTAJE_CINCO_PORCIENTO = 0.05;
const CIENTO_VEINTE_LITROS = 120;
const LITROS_ADICIONALES = 10;

class Nevera{
    constructor(capacidad){
        this.capacidad = capacidad;
    }

    calcularPrecioPorLitros(){
        if (this.capacidad >= CIENTO_VEINTE_LITROS){
            aumentarPrecioAdicional(getCantidad());
        }else {
            aumentarPrecioAdicional(0);
        }
    }

    getCantidad() {
        return getPorcentajePorCadaLitro() * getPrecio();
    }

    getPorcentajePorCadaLitro() {
        return getCantidadDeLitros() * PORCENTAJE_CINCO_PORCIENTO;
    }

    getCantidadDeLitros() {
        return Math.floor(getLitrosDeMas() / LITROS_ADICIONALES);
    }

    getLitrosDeMas() {
        return capacidad - CIENTO_VEINTE_LITROS;
    }
}

module.exports = Nevera