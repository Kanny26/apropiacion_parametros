//arreglo de productos iniciales
export const inventario = ["cámara", "trípode", "micrófono"];

// Función para agregar un producto al inventario
export const agregarInventario = (lista, nuevo_producto) => {
    
    // Creamos una nueva lista copiando la original y agregando el nuevo producto
    const nuevaLista = [...lista, nuevo_producto];
    console.log(`Ahora el inventario tiene ${nuevaLista.length} productos.`);
    return nuevaLista;
}
