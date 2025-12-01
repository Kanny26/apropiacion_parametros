import { procesarPedido } from "./js/pedidos.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const pedido = {
    cliente : "ximena",
    producto: "postres",
    cantidad: 5,
}
const extra1 = prompt("Ingrese el primer extra: ")
const extra2 = prompt("Ingrese el segundo extra: ")
const extra3 = prompt("Ingrese el tercer extra: ")

const obj = procesarPedido(pedido, extra1, extra2, extra3)

console.log(obj)