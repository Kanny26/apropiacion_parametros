export const configurarUsuario = (defaults, personalizadas ) => {
    // Creamos un nuevo objeto combinando las configuraciones por defecto
    // con las personalizadas (el operador spread sobrescribe las propiedades)
    
    const final = {...defaults, ...personalizadas};
    
    // Extraemos el idioma de la configuración final
    const  {idioma} = final;
    return idioma;
}