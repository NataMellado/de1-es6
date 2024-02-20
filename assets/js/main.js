import Cliente from './cliente.js';
import Impuestos from './impuestos.js';


// Crear un array de clientes
const clientes = [
    new Cliente('Juan', new Impuestos(500000, 200000)),
    new Cliente('Pedro', new Impuestos(1000000, 300000)),
    new Cliente('Maria', new Impuestos(1500000, 400000)),
    new Cliente('Ana', new Impuestos(2000000, 500000)),
    new Cliente('Luis', new Impuestos(2500000, 600000)),
    new Cliente('Carlos', new Impuestos(3000000, 700000))
];

// Iterar sobre el array de clientes y mostrar el impuesto calculado en consola
console.log('Nombre          Impuesto');
console.log('--------------------------');
clientes.forEach(cliente => {
    console.log(`${cliente.getNombre.padEnd(15)} ${cliente.calcularImpuesto()}`);
});