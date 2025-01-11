import { axiosApiAddData } from ".";

export const addProduct = async (data: any): Promise<any> => {
    try {
        const response = await axiosApiAddData("/products", data);
        return response;
    } catch (error) {
        console.error("Error adding product:", error);
    }
}