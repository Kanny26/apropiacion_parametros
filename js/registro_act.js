export const registrarActividad = (actividad) => {
    try {
        // Extraemos las propiedades nombre y fecha del objeto actividad
        const { nombre, fecha } = actividad;

        // Validamos que ambos datos existan
        if (!nombre || !fecha) {
            //si falta un dato sale el error
            throw new Error("Faltan datos.");
        }
        // Si todo está correcto, mostramos mensaje de éxito
        console.log("Actividad registrada correctamente.");
    } catch (error) {
        console.log("Error la actividad no coincide:", error.message);
    }
}
