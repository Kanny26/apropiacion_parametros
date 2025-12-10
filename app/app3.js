import { registrarActividad  } from "../js/registro_act.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const nombre = prompt ("Nombre de la actividad: ");
const fecha = prompt ("Fecha de la actividad: ")


// Llamamos a la función registrarActividad pasando un objeto con nombre y fecha
registrarActividad({ nombre, fecha})