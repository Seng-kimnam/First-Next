const API_URL = [
    "https://655c2c57ab37729791a9f8b0.mockapi.io/api/products",
      `https://655c2c57ab37729791a9f8b0.mockapi.io/api/products/`
]
export const getAllProductService = async () => {

    
    try{
            const response  = await 
            fetch(API_URL[0])
            const data = await response.json();
            return data;
    }
    catch(error){
        console.error('Error:', error);
    }
}

export const getProductByIdService = async (productId) => {
    try{
        const response  = await 
            fetch(API_URL[1]+productId)
            const data = await response.json();
            return data;
    }
    catch(error){
        console.error('Error:', error);
    }
}