import { procesarPedido } from "../js/pedidos.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Definimos un objeto pedido con los datos básicos del cliente y su compra
const pedido = {
    cliente : "ximena",
    producto: "postres",
    cantidad: 5,
}

// Solicitamos al usuario que ingrese tres extras adicionales para el pedido
const extra1 = prompt("Ingrese el primer extra: ")
const extra2 = prompt("Ingrese el segundo extra: ")
const extra3 = prompt("Ingrese el tercer extra: ")

// Llamamos a la función procesarPedido pasando el pedido y los extras
const obj = procesarPedido(pedido, extra1, extra2, extra3)

console.log(obj)

