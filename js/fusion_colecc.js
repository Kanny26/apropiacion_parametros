export const fusionarColecciones = (lista1, lista2) => {
    try{
        //se usa el operado spread para combinar ambas listas 
        return [...lista1, ...lista2];
    }catch (error ){
        console.log("No se pudo fusionar las listas",error.message);
    }
};