import { axiosApiPatchData } from ".";
import { PostProductBody } from "../types/product";

/**
 * Update product by id
 * @param id 
 * @param data 
 */
export const updateProduct = async (id: string, data: PostProductBody) => {
    try {
        await axiosApiPatchData(`/products/${id}`, data);
    } catch (err: any) {
        console.log(">>> Message error:", err.message);
    }
}

