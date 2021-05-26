const Electrodomestico = require('../model/Electrodomestico');
const Nevera = require('../model//Nevera');
const Televisor = require('../model//Televisor');
const prompt = require('prompt-sync')();
const BIENVENIDOS = "Bienvenidos!";
const CREAR_ELECTRODOMESTICO = "1. Crear otro tipo de electrodomestico";
const CREAR_NEVERA = "2. Crear una Nevera";
const CREAR_TELEVISOR = "3. Crear un televisor";
const REGRESAR = "0. Regresar";
const GRACIAS = "Gracias por visitarnos";
// const electrodomesticos = new Array();

class UIMenu {

    constructor(){
        this.electrodomesticos = new Array();
    }

    showMenu(){
        var response = 0;
        do{
            this.mensajeDeBienvenida();
            this.mostrarMensaje("\n")
            this.agregarProductos(this.obtenerNumero("Ingrese un valor: "));    
        }while(response != 0)
    }

    agregarProductos(response){
        switch (response){
            case 1:
                this.crearElectrodomestico();
                break;
            case 2:
                this.crearNevera();
                break;
            case 3:
                this.crearTelevisor();
                break;
            default:
                this.mostrarMensaje(GRACIAS);
                break;
        }
    }

    crearElectrodomestico(){
        this.mostrarMensaje("\nElectrodomesticos\n")
        let nombre = this.obtenerString("Cual es tu nombre: ");
        let consumo = this.obtenerString("Cual es el tipo de consumo: ");
        let procedencia = this.obtenerString("Cual es el tipo de procedencia: ");
        // this.electrodomesticos.add(new Electrodomestico(nombre,consumo,procedencia));
        let electrodomestico = new Electrodomestico(nombre,consumo,procedencia);
        electrodomestico.calcularPrecio();
        console.log(electrodomestico.obtenerPrecio());
        //Mostrar valor o agregar al array
    }

    crearNevera(){
        this.mostrarMensaje("\nNevera\n")
        let nombre = this.obtenerString("Cual es tu nombre: ");
        let consumo = this.obtenerString("Cual es el tipo de consumo: ");
        let procedencia = this.obtenerString("Cual es el tipo de procedencia: ");
        let capacidad = this.obtenerNumero("Ingrese la capacidad en litros: ");
        // this.electrodomesticos.add(new Nevera(nombre,consumo,procedencia,capacidad));
        let electrodomestico = new Nevera(nombre,consumo,procedencia,capacidad);
        electrodomestico.calcularPrecio();
        console.log(electrodomestico.obtenerPrecio());
    }

    crearTelevisor(){
        this.mostrarMensaje("\nTelevisor\n")
        let nombre = this.obtenerString("Cual es tu nombre: ");
        let consumo = this.obtenerString("Cual es el tipo de consumo: ");
        let procedencia = this.obtenerString("Cual es el tipo de procedencia: ");
        let dimension = this.obtenerNumero("Ingrese la capacidad en litros: ");
        let TDT = this.obtenerNumero("Ingrese la capacidad en litros: ");
        // this.electrodomesticos.add(new Televisor(nombre,consumo,procedencia,dimension,TDT));
        //Mostrar valor o agregar al array
        let electrodomestico = new Televisor(nombre,consumo,procedencia,dimension,TDT);
        electrodomestico.calcularPrecio();
        console.log(electrodomestico.obtenerPrecio());
    }

    mostrarMensaje(mensaje){
        console.log(mensaje)
    }

    obtenerString(mensaje){
        return prompt(mensaje);
    }
    
    obtenerNumero(mensaje){
        return parseInt(prompt(mensaje));
    }
    mensajeDeBienvenida(){
        this.mostrarMensaje(BIENVENIDOS + "\n");
        this.mostrarMensaje(CREAR_ELECTRODOMESTICO);
        this.mostrarMensaje(CREAR_NEVERA);
        this.mostrarMensaje(CREAR_TELEVISOR);
        this.mostrarMensaje(REGRESAR);
    }

    
    
    // mensaje = "Cual es tu nombre: ";
    // let valor = obtenerValor(mensaje);
    
    // mostrarMensaje(parseInt(valor) + 1)
}

module.exports = UIMenu