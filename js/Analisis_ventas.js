export const totalPrimerProducto = (ventas) => {
    //se destructura para extraer directamente el precio y las unidades del primer elemento del arreglo ventas
    const [
        { detalles: {precio, unidades}}
    ] = ventas;

    //calculamos el total multiplicando precio por unidades
    return precio * unidades;
};
