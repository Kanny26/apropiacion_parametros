
// export const procesarPedido = (pedido, ...extras) => {
//     return {
//         ...pedido, 
//         extras}
// }
    // console.log(pedido);
    // console.log(extras);

export const procesarPedido = (pedido, ...extras) => ({...pedido, extras});

