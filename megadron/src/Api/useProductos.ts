import axios from 'axios';

const productosApi = axios.create({
    baseURL: 'http://localhost:3000'
});
// export default productosApi;


const useProductos = () => {
    
    const ObetnerProductosApi = async () => {
        const respuesta = {
            data: [],
        };

        try {
            const { data } = await productosApi.get(
                'Productos/',
                {
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            );
            respuesta.data = data;
            
        } catch (error) {
            console.log(error);
            
        }
        return respuesta;
    }

    return { ObetnerProductosApi}
};

export default useProductos;