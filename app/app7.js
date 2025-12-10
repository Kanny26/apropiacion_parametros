import PromptSync from "prompt-sync";
import { evaluar} from "../js/eval_datos.js";

const prompt = PromptSync();

// Pedimos tres valores al usuario y los convertimos a número
const valor1 = Number(prompt("Ingresa el primer valor: "));
const valor2 = Number(prompt("Ingresa el segundo valor: "));
const valor3 = Number(prompt("Ingresa el tercer valor: "));

// Mostramos en consola el promedio calculado por la función evaluar
console.log("El promedio es: ", evaluar(valor1, valor2,valor3));