
import PromptSync from "prompt-sync";
import { actualizarPerfil } from "../js/actualizacion_perfiles.js"; 
const prompt = PromptSync();

// Perfil inicial
const perfil = { nombre: "Karol", edad: 18, ciudad: "Bucaramanga" };

console.log("--- Actualización de perfil ---");


// Pedimos datos al usuario
const nuevoNombre= prompt("Ingresa tu nombre: ");
const nuevaEdad = Number(prompt("Ingresa tu nueva edad: "));
const nuevaCiudad = prompt("Ingresa tu nueva ciudad: ");

// Llamamos a la función 
const perfilActualizado = actualizarPerfil(
    perfil,
    { edad: nuevaEdad },
    { ciudad: nuevaCiudad }
);

// Mostramos resultados
console.log("\nPerfil original:", perfil);
console.log("Perfil actualizado:", perfilActualizado);
