
export const inventario = ["cámara", "trípode", "micrófono"];

export const agregarInventario = (lista, nuevo_producto) => {
    
    const nuevaLista = [...lista, nuevo_producto];
    console.log(`Ahora el inventario tiene ${nuevaLista.length} productos.`);
    return nuevaLista;
}
