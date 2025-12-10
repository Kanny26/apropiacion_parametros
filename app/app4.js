import PromptSync from "prompt-sync";
import { configurarUsuario } from "../js/configuraciones.js";

const prompt = PromptSync ();

// Pedimos al usuario que ingrese el tema y el idioma de la interfaz
const tema = prompt("Tema (claro / oscuro): ");
const idioma = prompt("Idioma (es / en): ");

//valor por defecto
const defaults = {tema: "claro", idioma: "es"};

// Llamamos a la función configurarUsuario pasando los valores por defecto
// y las configuraciones personalizadas que el usuario ingresó
const resultado = configurarUsuario(defaults, 
    {
    tema,
    idioma
    }
);

console.log("Idioma configurado: " , idioma + "  Tema configurado", tema );

