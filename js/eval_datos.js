export const evaluar = (...valores) => {
    try{
        // Validamos que todos los valores sean numéricos
        for (let i = 0; i < valores.length; i++){
            if (isNaN(valores[i])){
                throw new Error ("todos los valores deben ser numericos")
            }
        }
         // Creamos una nueva lista copiando los valores recibidos
        const nuevalista = [...valores];

        // Calculamos la suma de todos los valores
        let suma = 0;
        for (let i = 0; i < nuevalista.length; i++){
            suma += nuevalista[i];
        }

        // Retornamos el promedio (suma dividido entre cantidad de valores)
        return suma / nuevalista.length;
    }catch (error){
        console.log("Error: ", error.message);
    }
}