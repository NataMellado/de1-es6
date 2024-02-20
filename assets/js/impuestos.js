// Create class impuestos
class Impuestos {
    
    constructor(montoBrutoAnual, deducciones) {
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    // Getters
    get getMontoBrutoAnual() {
        return this.montoBrutoAnual;
    }

    get getDeducciones() {
        return this.deducciones;
    }

    // Setters
    set setMontoBrutoAnual(montoBrutoAnual) {
        this.montoBrutoAnual = montoBrutoAnual;
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