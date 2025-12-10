import { totalPrimerProducto } from "../js/Analisis_ventas.js";

// Definimos un arreglo de ventas con dos productos
const ventas = [
    { producto: "teclado", detalles: {precio: 50, unidades: 3}},
    { producto: "mouse", detalles: {precio: 20, unidades: 5}}
];

console.log ("Total vendido del primer producto: " , totalPrimerProducto(ventas));