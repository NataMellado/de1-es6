import Impuestos from './impuestos.js';

// Crear la clase Cliente
class Cliente {
    
    constructor(nombre, Impuestos) {
        this.nombre = nombre;
        this.impuestos = Impuestos;
    }

    // Getters
    get getNombre() {
        return this.nombre;
    }

    get getImpuesto() {
        return this.impuesto;
    }

    // Setters
    set setNombre(nombre) {
        this.nombre = nombre;
    }

    set setImpuesto(impuesto) {
        this.impuesto = impuesto;
    }

    // Método calcularImpuesto
    calcularImpuesto() {
        return this.impuestos.calcularImpuesto();
    }

}

export default Cliente;
