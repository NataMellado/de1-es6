import Impuestos from './impuestos.js';

// Crear la clase Cliente
class Cliente {
    
    constructor(nombre, Impuestos) {
        this.nombre = nombre;
        this.impuestos = Impuestos;
    }

    // Getters y Setters de nombre
    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    // Getters y Setters de impuestos
    get getImpuesto() {
        return this.impuesto;
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
