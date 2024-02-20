"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Crear un array de clientes
var clientes = [new _cliente.default('Juan', new _impuestos.default(500000, 200000)), new _cliente.default('Pedro', new _impuestos.default(1000000, 300000)), new _cliente.default('Maria', new _impuestos.default(1500000, 400000)), new _cliente.default('Ana', new _impuestos.default(2000000, 500000)), new _cliente.default('Luis', new _impuestos.default(2500000, 600000)), new _cliente.default('Carlos', new _impuestos.default(3000000, 700000))];

// Iterar sobre el array de clientes y mostrar el impuesto calculado en consola
console.log('Nombre          Impuesto');
console.log('--------------------------');
clientes.forEach(function (cliente) {
  console.log("".concat(cliente.getNombre.padEnd(15), " ").concat(cliente.calcularImpuesto()));
});