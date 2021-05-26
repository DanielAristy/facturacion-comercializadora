const CONSUMO_TIPO_A = 450000;
const CONSUMO_TIPO_B = 350000;
const CONSUMO_TIPO_C = 250000;
const PROCEDENCIA_TIPO_N = 250000;
const PROCEDENCIA_TIPO_I = 350000;
const PRODUCTO_IMPORTADO = "IMPORTADO";
const NO_EXISTE_PROCEDENCIA = "No existe esta procedencia";
const PRODUCTO_NACIONAL = "NACIONAL";

class Electrodomestico {

    constructor(nombre, consumo, procedencia){
        this.nombre = nombre;
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.precio = 0;
    }

    calcularPrecioDeConsumo(){
        switch(this.consumo){
            case "A":
                this.aumentarPrecioAdicional(CONSUMO_TIPO_A);
                break;
            case "B":
                this.aumentarPrecioAdicional(CONSUMO_TIPO_B);
                break;
            case "C":
                this.aumentarPrecioAdicional(CONSUMO_TIPO_C);
                break;
            // default:
            //     imprimirMensaje(NO_EXISTE_ESTE_CONSUMO);
            //     break;
        }
    } 

    calcularPrecioDeProcedencia(){
        switch (this.procedencia){
            case "N":
                console.log(PRODUCTO_NACIONAL)
                this.aumentarPrecioAdicional(PROCEDENCIA_TIPO_N);

                break;
            case "I":
                console.log(PRODUCTO_IMPORTADO)
                this.aumentarPrecioAdicional(PROCEDENCIA_TIPO_I);

                break;
            default:
                console.log(NO_EXISTE_PROCEDENCIA)
                this.aumentarPrecioAdicional(0);
                break;
        }
    }

    calcularPrecio(){
        this.calcularPrecioDeConsumo();
        this.calcularPrecioDeProcedencia();
    }

    aumentarPrecioAdicional(adicional){
        this.precio += adicional;
    }

    obtenerPrecio(){
        return this.precio;
    }

}

module.exports = Electrodomestico;