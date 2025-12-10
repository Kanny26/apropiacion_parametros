export const actualizarPerfil = (perfil, ...nuevosDatos) => {
    // Creamos un objeto nuevo a partir del perfil original
    let resultado = { ...perfil };

    // Recorremos cada objeto parcial y lo expandimos en resultado
    for (const dato of nuevosDatos) {
        resultado = { ...resultado, ...dato };
    }

    // Retornamos el perfil actualizado
    return resultado;
};