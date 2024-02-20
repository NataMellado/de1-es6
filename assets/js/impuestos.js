// Create class impuestos
class Impuestos {
    
    constructor(montoBrutoAnual, deducciones) {
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    // Getters y Setter de montoBrutoAnual
    get getMontoBrutoAnual() {
        return this.montoBrutoAnual;
    }
    
    set setMontoBrutoAnual(montoBrutoAnual) {
        this.montoBrutoAnual = montoBrutoAnual;
    }

    // Getters y Setter de deducciones
    get getDeducciones() {
        return this.deducciones;
    }

    set setDeducciones(deducciones) {
        this.deducciones = deducciones;
    }

    // Método calcularImpuesto
    calcularImpuesto() {
        return (this.montoBrutoAnual - this.deducciones) * 0.21;
    }

}

export default Impuestos;