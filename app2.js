import { agregarInventario, inventario } from "./js/inventario.js";
import PromptSync from "prompt-sync";

const entrada = PromptSync();
const nuevo = entrada("Agrega un producto: ");

const inventarioActualizado = agregarInventario(inventario, nuevo);

console.log("Inventario original:", inventario);
console.log("Inventario nuevo:", inventarioActualizado);
