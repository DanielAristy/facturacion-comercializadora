var CONSUMO_TIPO_A = 450000;
var CONSUMO_TIPO_B = 350000;
var CONSUMO_TIPO_C = 250000;
var PROCEDENCIA_TIPO_N = 250000;
var PROCEDENCIA_TIPO_I = 350000;
var PRODUCTO_IMPORTADO = "IMPORTADO";
var NO_EXISTE_PROCEDENCIA = "No existe esta procedencia";
var PRODUCTO_NACIONAL = "NACIONAL";

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
                aumentarPrecioAdicional(CONSUMO_TIPO_A);
                break;
            case "B":
                aumentarPrecioAdicional(CONSUMO_TIPO_B);
                break;
            case "C":
                aumentarPrecioAdicional(CONSUMO_TIPO_C);
                break;
            default:
                imprimirMensaje(NO_EXISTE_ESTE_CONSUMO);
                break;
        }
    } 

    calcularPrecioDeProcedencia(){
        switch (this.procedencia){
            case "N":
                console.log(PRODUCTO_NACIONAL)
                aumentarPrecioAdicional(PROCEDENCIA_TIPO_N);

                break;
            case "I":
                console.log(PRODUCTO_IMPORTADO)
                aumentarPrecioAdicional(PROCEDENCIA_TIPO_I);

                break;
            default:
                console.log(NO_EXISTE_PROCEDENCIA)
                aumentarPrecioAdicional(0);
                break;
        }
    }

    calcularPrecio(){
        calcularPrecioDeConsumo();
        calcularPrecioDeProcedencia();
    }

    aumentarPrecioAdicional(adicional){
        this.precio += adicional;
    }
}

module.exports = Electrodomestico;