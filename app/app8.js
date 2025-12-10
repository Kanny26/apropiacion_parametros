import PromptSync from "prompt-sync";
import { fusionarColecciones } from "../js/fusion_colecc.js";

const prompt = PromptSync();

// Pedimos al usuario que ingrese elementos de la primera y segunda lista separados por comas
const lista1 = prompt("ingresa elementos de la primera lista separados: ").split(",");
const lista2 = prompt("ingresa elementos de la segunda lista: ").split(",");


// Mostramos en consola la colección final fusionada
console.log("coleccion final: ", fusionarColecciones(lista1, lista2));