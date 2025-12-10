import { agregarInventario, inventario } from "../js/inventario.js";
import PromptSync from "prompt-sync";

// Inicializamos prompt-sync para capturar entradas del usuario
const entrada = PromptSync();

// Pedimos al usuario que ingrese un nuevo producto para agregar al inventario
const nuevo = entrada("Agrega un producto: ");

// Usamos la función agregarInventario para crear una nueva lista con el producto agregado
const inventarioActualizado = agregarInventario(inventario, nuevo);

// Mostramos en consola el inventario original y el inventario actualizado
console.log("Inventario original:", inventario);
console.log("Inventario nuevo:", inventarioActualizado);
