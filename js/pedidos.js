
// export const procesarPedido = (pedido, ...extras) => {
//     return {
//         ...pedido, 
//         extras}
// }
    // console.log(pedido);
    // console.log(extras);

// Recibe un objeto pedido y una lista de extras (usando el operador rest ...extras)
// Retorna un nuevo objeto que combina el pedido original con la propiedad "extras"
export const procesarPedido = (pedido, ...extras) => ({...pedido, extras});


